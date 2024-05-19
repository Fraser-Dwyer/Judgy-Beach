import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

export default function PlayOnce({ size, icon, colour }) {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  const mouseOver = () => {
    if (!playerRef.current.isPlaying) {
      playerRef.current.playFromBeginning();
    }
  };

  return (
    <>
      <div onClick={mouseOver} className="iconDiv sm:hover:cursor-pointer">
        <Player ref={playerRef} icon={icon} size={size} colorize={colour} />
      </div>
    </>
  );
}
