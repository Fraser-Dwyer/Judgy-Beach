import profileIcon from "../Images/profileIcon.png";
import gavel from "../Images/gavel.png";
import thumbsUp from "../Images/thumbs-up.json";
import StaticIcon from "./StaticIcon";
import speech from "../Images/speech.json";
import CommentSection from "./CommentSection";
import { useState } from "react";

export default function ({ title, author, date, image, description }) {
  const [thumbsUpColour, setThumbsUpColour] = useState("#000000");
  const [showComments, setShowComments] = useState(false);
  const moreTextElement = document.querySelector("#more-btn");
  const lessTextElement = document.querySelector("#less-btn");
  const surTextElement = document.querySelector("#more-text");
  const elipseElement = document.querySelector("#elipse");

  const showMore = () => {
    moreTextElement.classList.add("hidden");
    elipseElement.classList.add("hidden");
    lessTextElement.classList.remove("hidden");
    surTextElement.classList.remove("hidden");
  };

  const showLess = () => {
    moreTextElement.classList.remove("hidden");
    elipseElement.classList.remove("hidden");
    lessTextElement.classList.add("hidden");
    surTextElement.classList.add("hidden");
  };

  const likeAction = () => {
    thumbsUpColour === "#000000"
      ? setThumbsUpColour("#0070c0")
      : setThumbsUpColour("#000000");
  };

  const commentsFunction = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full bg-white">
        <CommentSection
          comments={[
            { username: "User1", comment: "Oh wow cant wait to try!" },
            { username: "User2", comment: "Me too!!" },
            { username: "User3", comment: "Slayyy Queen!" },
          ]}
          showComments={showComments}
          commentsFunction={commentsFunction}
        />

        <div className="flex items-center border-b-[1px] border-b-black p-[2vw]">
          <div className="flex items-center">
            <img src={profileIcon} alt="Profile" className="w-[10%]" />
            <div className="ml-[2vw]">
              <p className="text-md">{author}</p>
              <p className="text-sm">{date}</p>
            </div>
          </div>
          <div>
            <button className="btn prim">Judge</button>
          </div>
        </div>
        <div className="mb-[2vw]">
          <div className="flex items-center ml-[2vw] mt-[2vw] font-bold">
            <p className="text-lg font-bold mr-[2vw]">{title}</p>
            <p className="text-lg">4.9 / 5.0</p>
            <img
              src={gavel}
              alt="Gavel"
              className="w-[3.5vw] h-[3.5vw] mx-[1vw]"
            />
          </div>
          <div className="flex items-center mb-[1vw] mt-[0.5vw] ml-[2vw] text-md">
            <p className="font-bold">4.7 / 5.0</p>
            <img src={gavel} alt="Gavel" className="w-[3vw] h-[3vw] mx-[1vw]" />
            <p className="mr-[1vw]">(14 Judges)</p>
          </div>
          <div className="flex justify-center">
            <img src={image} alt="Post" className="" />
          </div>
          <div id="likeBar" className="flex ml-[2vw] items-center">
            <div className="flex mt-[1vw]" onClick={likeAction}>
              <StaticIcon
                icon={thumbsUp}
                size={"6vw"}
                colour={thumbsUpColour}
              />
              <p className="ml-[1vw] text-lg">19</p>
            </div>
            <div
              className="flex mt-[1vw] ml-[4vw] items-center"
              onClick={commentsFunction}
            >
              <StaticIcon icon={speech} size={"8vw"} />
              <p className="ml-[0.5vw] text-lg">4</p>
            </div>
          </div>
          {description.slice(150) !== null && (
            <p className="text-md m-[2vw] mt-[1vw]">
              {description.slice(0, 150)}
              <span id="elipse" className="">
                {"..."}
              </span>
              {description.slice(150) !== null && (
                <span id="more-text" className="hidden">
                  {description.slice(150)}
                </span>
              )}
              <span
                id="more-btn"
                onClick={showMore}
                className="font-bold text-md"
              >
                Read more
              </span>
              <span
                id="less-btn"
                onClick={showLess}
                className="hidden font-bold text-md"
              >
                {" "}
                Show less
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
