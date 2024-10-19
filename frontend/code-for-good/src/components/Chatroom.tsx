import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Button, VStack } from "@chakra-ui/react";
import Chat from "./Chat";
import Navbar2 from "./Navbar2";

const Chatroom = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [peerConnection, setPeerConnection] =
    useState<RTCPeerConnection | null>(null);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (activeTab === "video") {
      const ws = new WebSocket("ws://localhost:8080");
      setWebSocket(ws);

      ws.onmessage = async (message) => {
        const data = JSON.parse(message.data);
        if (data.offer) {
          await peerConnection?.setRemoteDescription(
            new RTCSessionDescription(data.offer)
          );
          const answer = await peerConnection?.createAnswer();
          await peerConnection?.setLocalDescription(answer);
          ws.send(JSON.stringify({ answer }));
        } else if (data.answer) {
          await peerConnection?.setRemoteDescription(
            new RTCSessionDescription(data.answer)
          );
        } else if (data.candidate) {
          await peerConnection?.addIceCandidate(
            new RTCIceCandidate(data.candidate)
          );
        }
      };

      const pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });
      setPeerConnection(pc);

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          ws.send(JSON.stringify({ candidate: event.candidate }));
        }
      };

      pc.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
          stream.getTracks().forEach((track) => pc.addTrack(track, stream));
        });

      return () => {
        ws.close();
        pc.close();
      };
    }
  }, [activeTab]);

  const createOffer = async () => {
    const offer = await peerConnection?.createOffer();
    await peerConnection?.setLocalDescription(offer);
    if (webSocket?.readyState === WebSocket.OPEN) {
      webSocket.send(JSON.stringify({ offer }));
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="flex rounded border m-4 p-2 h-[35em]">
        <div className="flex flex-col border-r gap-4 p-4">
          <Button onClick={() => setActiveTab("chat")} bg="#002982" color="white">
            Chat Room
          </Button>
          <Button onClick={() => setActiveTab("video")} bg="#002982" color="white">
            Meet with a Mentor
          </Button>
        </div>
        <div className="flex w-full">
          {activeTab === "video" ? (
            <div className="flex flex-col items-center">
              <motion.div
                className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box display="flex" width="100%" height="100%">
                  <video
                    ref={localVideoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{
                      width: "50%",
                      height: "100%",
                      objectFit: "cover",
                      borderRight: "2px solid white",
                    }}
                  />
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    style={{
                      width: "50%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </motion.div>
              <Button
                onClick={createOffer}
                bg="#002982" color="white"
                width="40%"
                marginTop="4"
              >
                Start Video Chat
              </Button>
            </div>
          ) : (
            <Chat />
          )}
        </div>
      </div>
    </>
  );
};

export default Chatroom;
