import "../Styles/Header.css";
import hamburgerIcon from "../Images/hamburgerIconWhite.png";
import profileIcon from "../Images/profileIcon.png";
import crossIcon from "../Images/crossIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [hamburgerClass, setHamburgerClass] = useState(
    "hamburger hamburgerClosed"
  );

  return (
    <>
      <div className="headerContainer">
        <div>
          <img
            src={hamburgerIcon}
            alt="Hamburger menu icon"
            onClick={() => setHamburgerClass("hamburger hamburgerOpen")}
          />
        </div>
        <p>Judgy Beach</p>
        <div>
          <img src={profileIcon} alt="Profile picture icon" />
        </div>
      </div>
      <div className={hamburgerClass}>
        <div>
          <p>Judgy Beach</p>
          <div
            className="crossIconContainer"
            onClick={() => setHamburgerClass("hamburger hamburgerClosed")}
          >
            <img src={crossIcon} alt="Cross Icon" />
          </div>
        </div>
        <div className="links">
          <p onClick={() => navigate("/login")}>Log In</p>
          <p onClick={() => navigate("/signup")}>Sign Up</p>
        </div>
      </div>
    </>
  );
}
