import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import axios from "axios";
import googleLogo from "../Images/google-logo.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import PlayOnce from "../Components/PlayOnce";

const Gavel = require("../Images/gavel-animation-black.json");

export default function Signup() {
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <>
      <div className="w-screen mt-[10vw] sm:mt-0 sm:flex">
        <div className="flex justify-center items-center sm:w-[80%]">
          <img
            src={judgyBeachLogo}
            alt="Judgy Beach Logo"
            className="w-[40%] mb-[2vw] mr-[3vw] sm:mb-0 sm:w-[200px] sm:h-[200px]"
          ></img>
          <div className="w-[40%]">
            <div className="flex items-center">
              <p className="flex mr-[2vw] text-xxxl">Judgy</p>
              <PlayOnce size="10vw" icon={Gavel} />
            </div>
            <p className="flex flex-1 text-[12vw] mt-[-2vw]">Beach</p>
          </div>
        </div>
        <div className="py-[3vw] flex justify-center sm:p-[10px] sm:items-center sm:w-[40%]">
          <div className="w-3/4 sm:max-w-[400px]">
            <p className="text-xl font-bold text-center mb-[2vw] sm:text-xlPC sm:mb-[10px]">
              Sign Up
            </p>
            <form className="">
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Username"></input>
              </div>
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Password"></input>
              </div>
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Repeat Password"></input>
              </div>
              <div className="flex justify-center">
                <button className="btn prim w-full">Sign Up</button>
              </div>
              <p className="text-md pt-[2vw] flex justify-center sm:text-mdPC">
                Already have an account?{" "}
                <span
                  className="underline font-bold ml-[1vw] sm:hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  {""} Log in here
                </span>
              </p>
            </form>
            <p className="text-md font-bold py-[2vw] flex justify-center sm:text-mdPC sm:py-[20px]">
              - OR -
            </p>
            <div className="w-full flex justify-center">
              <div
                onClick={() => login()}
                className="flex justify-center items-center px-[2vw] py-[1vw] w-full bg-white borders rounded-md sm:px-[16px] sm:py-[7px]"
              >
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-[4vw] h-[4vw] mr-[2vw] sm:w-[20px] sm:h-[20px] sm:mr-[15px]"
                />
                <p className="text-md sm:text-mdPC">Sign in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
