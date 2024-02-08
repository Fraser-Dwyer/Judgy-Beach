import profileIcon from "../Images/profileIcon.png";
import gavel from "../Images/gavel.png";
import thumbsUp from "../Images/thumbs-up.json";
import StaticIcon from "./StaticIcon";
import speech from "../Images/speech.json";
import CommentSection from "./CommentSection";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export default function ({ title, author, date, image, description }) {
  const [thumbsUpColour, setThumbsUpColour] = useState("#000000");
  const [showComments, setShowComments] = useState(false);
  const moreTextElement = document.querySelector("#more-btn");
  const lessTextElement = document.querySelector("#less-btn");
  const surTextElement = document.querySelector("#more-text");
  const elipseElement = document.querySelector("#elipse");
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1280px)");

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
    <div className="sm:flex sm:justify-center w-screen">
      <div className="flex justify-center sm:w-[800px]">
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

          <div className="flex items-center border-b-[1px] border-b-black p-[2vw] justify-between sm:p-[15px]">
            <div className="flex items-center">
              <img
                src={profileIcon}
                alt="Profile"
                className="w-[10%] sm:w-[60px]"
              />
              <div className="ml-[2vw] sm:ml-[10px]">
                <p className="text-md sm:text-lgPC">{author}</p>
                <p className="text-sm sm:text-mdPC">{date}</p>
              </div>
            </div>
            <div>
              <button className="btn prim">Judge</button>
            </div>
          </div>
          <div className="mb-[2vw] sm:mb-[10px]">
            <div className="flex items-center ml-[2vw] mt-[2vw] font-bold sm:ml-[15px] sm:mt-[15px]">
              <p className="text-lg font-bold mr-[2vw] sm:text-xlPC sm:mr-[15px]">
                {title}
              </p>
              <p className="text-lg sm:text-lgPC">4.9 / 5.0</p>
              <img
                src={gavel}
                alt="Gavel"
                className="w-[3.5vw] h-[3.5vw] mx-[1vw] sm:w-[25px] sm:h-[25px] sm:ml-[5px] sm:mr-[10px]"
              />
            </div>
            <div className="flex items-center mb-[1vw] mt-[0.5vw] ml-[2vw] text-md sm:mb-[10px] sm:mt-[0px] sm:ml-[15px] sm:text-mdPC">
              <p className="font-bold">4.7 / 5.0</p>
              <img
                src={gavel}
                alt="Gavel"
                className="w-[3vw] h-[3vw] mx-[1vw] sm:w-[16px] sm:h-[16px] sm:ml-[5px] sm:mr-[10px]"
              />
              <p className="">(14 Judges)</p>
            </div>
            <div className="flex justify-center ">
              <img src={image} alt="Post" className="sm:w-[50%]" />
            </div>
            <div
              id="likeBar"
              className="flex ml-[2vw] items-center sm:ml-[15px]"
            >
              <div
                className="flex mt-[1vw] sm:mt-[5px] items-center"
                onClick={likeAction}
              >
                <StaticIcon
                  icon={thumbsUp}
                  size={isSmallDevice ? "5vw" : "35px"}
                  colour={thumbsUpColour}
                />
                <p className="ml-[1vw] text-lg sm:ml-[5px] sm:text-lgPC">19</p>
              </div>
              <div
                className="flex mt-[1vw] ml-[4vw] items-center sm:mt-[5px] sm:ml-[30px]"
                onClick={commentsFunction}
              >
                <StaticIcon
                  icon={speech}
                  size={isSmallDevice ? "6vw" : "45px"}
                />
                <p className="ml-[0.5vw] text-lg sm:ml-[0px] sm:text-lgPC">4</p>
              </div>
            </div>
            {description.slice(150) !== null && (
              <p className="text-md m-[2vw] mt-[1vw] sm:text-lgPC sm:m-[10px] sm:mt-[5px]">
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
                  className="font-bold text-md sm:text-lgPC sm:hover:cursor-pointer"
                >
                  Show more
                </span>
                <span
                  id="less-btn"
                  onClick={showLess}
                  className="hidden font-bold text-md sm:text-lgPC sm:hover:cursor-pointer"
                >
                  {" "}
                  Show less
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
