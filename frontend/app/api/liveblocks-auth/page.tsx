import Room from "@/app/api/liveblocks-auth/Room";
import { IDE } from "@/components/editor/IDE";

export default function Home() {
  return (
    <Room>
      <IDE />
    </Room>
  );
}
