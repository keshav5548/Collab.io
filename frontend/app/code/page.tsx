"use client";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import socket from "@/components/socket";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div>
      Chat OP
      <Input placeholder="Chat here"></Input>
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default page;
