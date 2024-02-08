import hamburgerIcon from "../Images/hamburgerIconWhite.png";
import profileIcon from "../Images/profileIcon.png";
import crossIcon from "../Images/crossIcon.png";
import { useNavigate } from "react-router-dom";
import PlayOnce from "./PlayOnce";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useRef } from "react";

const Gavel = require("../Images/gavel-animation.json");

export default function Header() {
  const navigate = useNavigate();
  const sideMenuRef = useRef(null);
  const userInfo = window.localStorage.getItem("CURRENT_USER_INFO");

  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");

  const openMenu = () => {
    const sideMenu = sideMenuRef.current;
    sideMenu.classList.remove("translate-x-[-100%]");
    sideMenu.classList.add("translate-x-[0%]");
    sideMenu.classList.add("shadow-3xl");
  };

  const closeMenu = () => {
    const sideMenu = sideMenuRef.current;
    sideMenu.classList.remove("translate-x-[0%]");
    sideMenu.classList.remove("shadow-3xl");
    sideMenu.classList.add("translate-x-[-100%]");
  };

  const linkClicked = (destination) => {
    closeMenu();
    navigate(destination);
  };

  return userInfo !== null ? (
    <>
      <div
        className="absolute bg-white h-full border-r-black border-r-2 left-0 transition ease-in-out translate-x-[-100%] z-50"
        ref={sideMenuRef}
      >
        <div className="flex justify-between p-[3vw] items-center sm:p-[27px]">
          <p className="text-[6vw] mr-[8vw] pt-[0.5vw] sm:text-[54px] sm:mr-[72px]">
            Judgy Beach
          </p>
          <img
            src={crossIcon}
            alt="Close Icon"
            className="w-[5vw] h-[5vw] sm:w-[45px] sm:h-[45px] sm:hover:cursor-pointer sm:hover:scale-[1.05]"
            onClick={() => closeMenu()}
          />
        </div>
        <ul className="p-[3vw] [&>*]:mb-[3vw] [&>*]:text-[4vw] sm:p-[27px] sm:[&>*]:mb-[27px] sm:[&>*]:text-[36px]">
          <li onClick={() => linkClicked("/signup")} className="link">
            Sign Up
          </li>
          <li onClick={() => linkClicked("/login")} className="link">
            Log In
          </li>
          <li onClick={() => linkClicked("/signup")} className="link">
            Third Option
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between bg-primary border-b-black border-b-2 p-[3vw] sm:p-[15px]">
        <div className="flex items-center">
          <img
            src={hamburgerIcon}
            alt="Hamburger menu icon"
            onClick={() => openMenu()}
            className="w-[6vw] sm:w-[54px] sm:hover:cursor-pointer sm:hover:scale-[1.05]"
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
            <div className="">
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
  ) : (
    <></>
  );
}
