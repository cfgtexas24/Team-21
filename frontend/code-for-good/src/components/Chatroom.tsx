import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Button, VStack } from "@chakra-ui/react";
import Chat from "./Chat";
import Navbar from "./Navbar";

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
      <Navbar />
      <Box
        width="100%"
        height="100vh"
        display="flex"
        bg="gray.100"
        padding="2rem"
      >
        <VStack spacing={4} align="stretch" width="200px" padding="2rem">
          <Button
            onClick={() => setActiveTab("chat")}
            colorScheme="teal"
            width={150}
          >
            Chat Room
          </Button>
          <Button
            onClick={() => {
              setActiveTab("video");
              createOffer();
            }}
            colorScheme="teal"
            width={150}
          >
            Meet with a Mentor
          </Button>
        </VStack>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
        >
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="6"
            bg="white"
            boxShadow="md"
            width="100%"
            height="70vh"
            overflow="hidden"
            position="relative"
          >
            {activeTab === "video" ? (
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
            ) : (
              <Chat />
            )}
          </Box>
          {activeTab === "video" && (
            <Button
              onClick={createOffer}
              colorScheme="teal"
              width="40%"
              marginTop="4"
            >
              Start Video Chat
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Chatroom;
