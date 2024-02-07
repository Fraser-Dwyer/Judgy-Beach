import { Player } from "@lordicon/react";

export default function StaticIcon({ size, icon, colour }) {
  return (
    <>
      <div className="iconDiv sm:hover:cursor-pointer">
        <Player icon={icon} size={size} colorize={colour} />
      </div>
    </>
  );
}
