import profilePic from "../Images/profileIcon.png";
import heart from "../Images/heart.json";
import heartFilled from "../Images/heart-filled.json";
import StaticIcon from "./StaticIcon";
import PlayOnce from "./PlayOnce";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export default function Comment({ commentInfo }) {
  const { username, comment } = commentInfo;
  const [liked, setLiked] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1280px)");

  const likeAction = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-full border-black border-b-[1px] first:border-t-[1px] flex justify-between p-[3vw] items-center sm:p-[20px] sm:w-[800px]">
      <div className="flex justify-start">
        <div className="mr-[3vw] sm:mr-[15px]">
          <img
            src={profilePic}
            alt="Profile icon"
            className="w-[8vw] h-[8vw] sm:w-[50px] sm:h-[50px]"
          />
        </div>
        <div className="text-md sm:text-lgPC">
          <p className="font-bold">{username}</p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="flex items-center" onClick={likeAction}>
        <p className="text-lg mr-[1.5vw] sm:text-lgPC sm:mr-[8px]">19</p>
        {liked && (
          <PlayOnce
            icon={heartFilled}
            size={isSmallDevice ? "5vw" : "35px"}
            color={"#ff0000"}
          />
        )}
        {!liked && (
          <StaticIcon icon={heart} size={isSmallDevice ? "5vw" : "35px"} />
        )}
      </div>
    </div>
  );
}
