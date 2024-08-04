"use client";

import React from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const onCreateRoom = () => {
    const roomNumber = Math.floor(Math.random() * 1000);
    router.push(`/code?room=${roomNumber}`);
  };

  return (
    <div className="h-screen w-screen flex bg-black items-center justify-center">
      <div className="justify-center items-center flex flex-col">
        <button
          onClick={onCreateRoom}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48"
        >
          Create Room
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-48"
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default page;
