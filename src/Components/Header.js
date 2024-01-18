import "../Styles/Header.css";
import hamburgerIcon from "../Images/hamburgerIconWhite.png";
import profileIcon from "../Images/profileIcon.png";
import crossIcon from "../Images/crossIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayOnce from "./PlayOnce";
import { useMediaQuery } from "@uidotdev/usehooks";

const Gavel = require("../Images/gavel-animation.json");

export default function Header() {
  const navigate = useNavigate();
  const [hamburgerClass, setHamburgerClass] = useState(
    "hamburger hamburgerClosed"
  );

  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");

  return (
    <>
      <div className="w-full flex justify-between bg-primary border-b-black border-b-2 p-[3vw] sm:p-[25px]">
        <div className="flex items-center">
          <img
            src={hamburgerIcon}
            alt="Hamburger menu icon"
            onClick={() => setHamburgerClass("hamburger hamburgerOpen")}
            className="w-[6vw] sm:w-[56px]"
          />
        </div>
        <div className="flex">
          <div className="text-white flex items-center text-[6vw] sm:text-[56px]">
            <p>Judgy Beach</p>
          </div>
          <div className="flex items-center pl-[2vw] sm:pl-[18px]">
            {isSmallDevice && <PlayOnce size="7vw" icon={Gavel} />}
            {!isSmallDevice && <PlayOnce size="66px" icon={Gavel} />}
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={profileIcon}
            alt="Profile pic icon"
            className="w-[9vw] sm:w-[85px]"
          />
        </div>
      </div>
      {false && (
        <div className="">
          <div>
            <p>Judgy Beach</p>
            <div
              className=""
              onClick={() => setHamburgerClass("hamburger hamburgerClosed")}
            >
              <img src={crossIcon} alt="Cross Icon" className="w-[50px]" />
            </div>
          </div>
          <div className="">
            <p onClick={() => navigate("/login")}>Log In</p>
            <p onClick={() => navigate("/signup")}>Sign Up</p>
          </div>
        </div>
      )}
    </>
  );
}
