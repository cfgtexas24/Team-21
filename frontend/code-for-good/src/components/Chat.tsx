import { Button, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://172.20.10.3:5174");

const Chat = () => {
  const [messages, setMessages] = useState<any>([
    { text: "welcome to STORM chat!", sender: "STORM" },
    { text: "hello everyone", sender: "user1" },
  ]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages: any) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: "You",
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      sendMessage();
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col w-3/4 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Chat Room</h2>
      <div className="h-3/4 overflow-y-auto space-y-2">
        {messages.map((msg: any, index: any) => (
          <>
            <div
              className={`message ${
                msg.sender === "You" ? "bg-blue-100" : "bg-white border"
              } inline-block max-w-[80%] p-2 rounded-md`}
              key={index}
            >
              <strong>{msg.sender}: </strong> {msg.text}
            </div>
            <br />
          </>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex mt-4 gap-4 justify-end items-end">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={handleEnter}
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default Chat;
