import PlayOnce from "../Components/PlayOnce";
import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useMediaQuery } from "@uidotdev/usehooks";
const Gavel = require("../Images/gavel-animation-black.json");

export default function Branding() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1280px)");

  return (
    <div className="sm:max-w-[800px] sm:w-[60%] sm:items-center">
      <div className="flex justify-center items-center">
        <img
          src={judgyBeachLogo}
          alt="Judgy Beach Logo"
          className="w-[40%] mb-[2vw] mr-[3vw] sm:mb-0 sm:w-[300px] sm:h-[300px]"
        ></img>
        <div className="w-[40%]">
          <div className="flex items-center">
            <p className="flex mr-[2vw] text-xxxl select-none sm:text-[65px] sm:mr-[15px]">
              Judgy
            </p>
            {isSmallDevice && <PlayOnce size="12vw" icon={Gavel} />}
            {!isSmallDevice && <PlayOnce size="100px" icon={Gavel} />}
          </div>
          <p className="flex flex-1 text-[12vw] mt-[-2vw] select-none sm:text-[100px] sm:mt-[-20px]">
            Beach
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:ml-[70px] sm:mt-[20px]">
        <ul className="text-[3.5vw] font-bold text-center mt-[1vw] sm:text-xxlPC sm:[&>*]:mb-[15px]">
          <li>Always have an opinion and need to share it?</li>
        </ul>
      </div>
    </div>
  );
}
