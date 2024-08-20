"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import React, { ReactNode } from "react";
interface RoomProps {
  // room: string | null; // room can be a string or null
  children: ReactNode;
}
const Room = ({ children }: RoomProps) => {
  const roomId = useExampleRoomId("liveblocks:examples:nextjs-yjs-monaco");
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <RoomProvider
        id={"899"}
        initialPresence={{
          cursor: null,
        }}
      >
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

function useExampleRoomId(roomId: string) {
  const params = useSearchParams();
  const exampleId = params?.get("exampleId");

  const exampleRoomId = useMemo(() => {
    return exampleId ? `${roomId}-${exampleId}` : roomId;
  }, [roomId, exampleId]);

  return exampleRoomId;
}
export default Room;
