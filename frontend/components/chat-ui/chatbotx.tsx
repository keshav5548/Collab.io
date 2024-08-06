"use client";

import React, { useState, useEffect } from "react";
import socket from "@/components/socket";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@/components/ui/button";

const Chatbotx = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const room = searchParams.get("room");
  const [message, setmessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState([]);
  const emptyDiv = useRef(null);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const sendMessage = () => {
    if (message != "") {
      socket.emit("send-message", { room, message });

      setmessage("");
    }
  };
  useEffect(() => {
    if (emptyDiv != null) {
      emptyDiv.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [receivedMessage]);
  useEffect(() => {
    socket.on("receive-message", (obj) => {
      setReceivedMessage((prev) => [...prev, { msg: obj.message, id: obj.id }]);
    });
    return () => {
      socket.off("receive-message");
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="bg-blue-500 text-white p-3 flex items-center">
              <img
                src="profile-pic.jpg"
                alt="weird"
                className="w-8 h-8 rounded-full mr-3"
              />
              <span>Deepakshi</span>
              <span className="ml-auto text-sm">online</span>
              <button className="ml-2 text-xl" onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className="scrollable-div flex-grow overflow-auto p-3 space-y-3">
              {/* Client & User messages */}
              {receivedMessage.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item.id == socket.id
                      ? "flex justify-end"
                      : "flex justify-start"
                  }`}
                >
                  <div
                    className={`${
                      item.id == socket.id
                        ? "bg-gray-200 "
                        : "bg-blue-500 text-white !important"
                    }"rounded-lg py-2 px-3 max-w-[70%]"`}
                  >
                    <p className="text-sm">{item.msg}</p>
                  </div>
                </div>
              ))}
              <div ref={emptyDiv}></div>
            </div>
            <div className="w-full border-t border-gray-200 p-3 flex h-24 items-center ">
              <input
                type="text"
                placeholder="Type Your Message..."
                className="block p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 caret-blue-500"
                onChange={(e) => setmessage(e.target.value)}
                onKeyDown={(e) => (e.key == "Enter" ? sendMessage() : null)}
                value={message}
              />
              <Button
                onClick={() => sendMessage()}
                className=" h-12 w-12 text-xl p-3 m-4"
              >
                <SendIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
      <button
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
        onClick={toggleModal}
      >
        <img src="headphones-icon.png" alt="Chat" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Chatbotx;
