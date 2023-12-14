import "../Styles/Header.css";
import hamburgerIcon from "../Images/hamburgerIconWhite.png";
import profileIcon from "../Images/profileIcon.png";

export default function Header() {
  return (
    <>
      <div className="headerContainer">
        <div>
          <img src={hamburgerIcon} alt="Hamburger menu icon" />
        </div>
        <p>Judgy Beach</p>
        <div>
          <img src={profileIcon} alt="Profile picture icon" />
        </div>
      </div>
    </>
  );
}
