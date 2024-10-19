import React, { useRef, useEffect, useState } from "react";

const VideoChat = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [peerConnection, setPeerConnection] =
    useState<RTCPeerConnection | null>(null);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Replace with your signaling server URL
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
  }, []);

  const createOffer = async () => {
    const offer = await peerConnection?.createOffer();
    await peerConnection?.setLocalDescription(offer);
    webSocket?.send(JSON.stringify({ offer }));
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline muted />
      <video ref={remoteVideoRef} autoPlay playsInline />
      <button onClick={createOffer}>Start Video Chat</button>
    </div>
  );
};

export default VideoChat;
