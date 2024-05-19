import { useRef } from "react";
import { Player } from "@lordicon/react";

export default function PlayOnClick({ size, icon, colour }) {
  const playerRef = useRef(null);

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
