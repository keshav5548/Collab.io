"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
const page = () => {
  const router = useRouter();
  const onCreateRoom = () => {
    const roomNumber = Math.floor(Math.random() * 1000);
    router.push(`/code?room=${roomNumber}`);
  };
  const [roomCode, setRoomCode] = useState("");
  const navigateToRoom = () => {
    if (roomCode.length > 0) router.push(`/code?room=${roomCode}`);
  };

  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <button
        onClick={onCreateRoom}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48"
      >
        Create Room
      </button>
      <div className="flex py-10">
        <Input onChange={(e) => setRoomCode(e.target.value)}></Input>
        <button
          onClick={() => navigateToRoom()}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48 "
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default page;
