import { useEffect, useMemo, useState } from "react";
import { useSelf } from "@liveblocks/react/suspense";
import { AwarenessList, UserAwareness } from "@/liveblocks.config";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";

type Props = {
  yProvider: LiveblocksYjsProvider;
};

export function Cursors({ yProvider }: Props) {
  // Get user info from Liveblocks authentication endpoint

  const user = {
    id: "charlielayne@example.com",
    info: {
      name: "Charlie Layne",
      color: "#D583F0",
      picture:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    },
  };
  const userInfo = user.info;

  const [awarenessUsers, setAwarenessUsers] = useState<AwarenessList>([]);

  useEffect(() => {
    // Add user info to Yjs awareness
    const localUser: UserAwareness["user"] = userInfo;
    yProvider.awareness.setLocalStateField("user", localUser);

    // On changes, update `awarenessUsers`
    function setUsers() {
      setAwarenessUsers([...yProvider.awareness.getStates()] as AwarenessList);
    }

    yProvider.awareness.on("change", setUsers);
    setUsers();

    return () => {
      yProvider.awareness.off("change", setUsers);
    };
  }, [yProvider]);

  // Insert awareness info into cursors with styles
  const styleSheet = useMemo(() => {
    let cursorStyles = "";

    for (const [clientId, client] of awarenessUsers) {
      if (client?.user) {
        cursorStyles += `
          .yRemoteSelection-${clientId}, 
          .yRemoteSelectionHead-${clientId}  {
            --user-color: "orange";
          }
          
          .yRemoteSelectionHead-${clientId}::after {
            content: "${client.user.name}";
          }
        `;
      }
    }

    return { __html: cursorStyles };
  }, [awarenessUsers]);

  return <style dangerouslySetInnerHTML={styleSheet} />;
}
