// ChatroomVideoUI.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import Chat from "./Chat";
import Navbar from "./Navbar";

const Chatroom = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <>
      <Navbar />
      <div className="flex rounded border m-4 p-2 h-96">
        <div className="flex flex-col border-r gap-4 p-4">
          <Button onClick={() => setActiveTab("chat")}>Chat Room</Button>
          <Button onClick={() => setActiveTab("video")}>
            Meet with a Mentor
          </Button>
        </div>
        <div className="flex w-full">
          {activeTab === "video" ? (
            <motion.div
              className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white">Video Stream</span>
            </motion.div>
          ) : (
            <Chat />
          )}
        </div>
      </div>
    </>
  );
};

export default Chatroom;
