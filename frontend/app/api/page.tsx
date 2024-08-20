"use client";
import Room from "@/app/api/Room";
import { IDE } from "@/components/editor/IDE";
import { useSearchParams } from "next/navigation";
import Chatbotx from "@/components/chat-ui/chatbotx";
export default function Home() {
  const searchParams = useSearchParams();
  const room = searchParams.get("room");

  return (
    <Room>
      <IDE />
      <Chatbotx />
    </Room>
  );
}
