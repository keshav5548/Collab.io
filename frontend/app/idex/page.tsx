// "use client";

// import {
//   LiveblocksProvider,
//   RoomProvider,
//   ClientSideSuspense,
// } from "@liveblocks/react/suspense";
// // import { CollaborativeEditor } from "./CollaborativeEditor";
// import { IDE } from "@/components/editor/IDE";

// import React, { ReactNode } from "react";

// const App = () => {
//   const roomId = "889";
//   return (
//     <LiveblocksProvider
//       publicApiKey={
//         "pk_dev_VH9ZnKnyIoO3aiSPXYUnKers7e6vfb3117AMRvVjrV0NNytNQrmXQeC9sS5OL6bO"
//       }
//     >
//       <RoomProvider
//         id={roomId}
//         initialPresence={{
//           cursor: null,
//         }}
//       >
//         <ClientSideSuspense fallback={<div>Loading…</div>}>
//           <IDE />
//         </ClientSideSuspense>
//       </RoomProvider>
//     </LiveblocksProvider>
//   );
// };

// export default App;
