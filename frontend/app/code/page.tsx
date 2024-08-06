"use client";
import React from "react";
import { useEffect, useState } from "react";
import socket from "@/components/socket";
import { useSearchParams } from "next/navigation";

import Chatbotx from "@/components/chat-ui/chatbotx";
const page = () => {
  const searchParams = useSearchParams();
  const room = searchParams.get("room");

  useEffect(() => {
    if (room) {
      console.log(room);
      socket.emit("join-room", room);
    }
    return () => {
      if (room) socket.emit("leave-room", room);
    };
  }, [room]);

  return (
    <>
      <div>Collaborate div</div>
      {room ? <Chatbotx /> : null}
    </>
  );
};

export default page;
