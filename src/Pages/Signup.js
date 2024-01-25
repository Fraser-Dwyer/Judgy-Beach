import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import axios from "axios";
import googleLogo from "../Images/google-logo.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import PlayOnce from "../Components/PlayOnce";

// Imports for the password eye
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Gavel = require("../Images/gavel-animation-black.json");

export default function Signup({ baseURL }) {
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");
  const [googleUser, setGoogleUser] = useState(null);
  const [normalUser, setNormalUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // States of the eye for the password fields
  const [passwordType, setPasswordType] = useState("password");
  const [eyeIconPassword, setEyeIconPassword] = useState(eyeOff);
  const [repeatPasswordType, setRepeatPasswordType] = useState("password");
  const [eyeIconRepeatPassword, setRepeatEyeIconPassword] = useState(eyeOff);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (googleUser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {})
        .catch((err) => console.log(err));
    }
  }, [googleUser]);

  async function handleSignup(e) {
    if (e !== undefined) {
      e.preventDefault();
    }

    // Put in some input validation here once it all works okay

    const pascalName = name.charAt(0).toUpperCase() + name.slice(1);

    // If made it here, try to make new user
    const response = await fetch(baseURL + "/signup", {
      method: "POST",
      body: JSON.stringify({
        name: pascalName,
        username: username,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log(response);
    } else {
      console.log(response);
    }
  }

  // For the password Eye icon
  const handleTogglePassword = (type, iconFunction, typeFunction) => {
    if (type === "password") {
      iconFunction(eye);
      typeFunction("text");
    } else {
      iconFunction(eyeOff);
      typeFunction("password");
    }
  };

  return (
    <>
      <div className="w-screen mt-[10vw] sm:mt-0 sm:flex sm:justify-center sm:items-center">
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
          {!isSmallDevice && (
            <div className="ml-[70px] mt-[20px]">
              <ul className="text-xxlPC [&>*]:mb-[15px] font-bold">
                <li>Always have an opinion and need to share it?</li>
              </ul>
            </div>
          )}
        </div>
        <div className="py-[8vw] flex justify-center sm:p-[10px] sm:items-center sm:w-[40%] sm:h-[100dvh]">
          <div className="w-3/4 borders bg-white p-[4vw] sm:max-w-[400px] sm:p-[20px]">
            <p className="text-xl font-bold text-left mb-[2vw] sm:text-xlPC sm:mb-[10px]">
              Sign Up
            </p>
            <form className="[&>div]:flex [&>div]:justify-center [&>div]:sm:justify-start">
              <div>
                <input
                  id="firstName"
                  autoComplete="off"
                  className="input"
                  placeholder="First Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div>
                <input
                  id="username"
                  autoComplete="off"
                  className="input"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div>
                <input
                  id="password"
                  autoComplete="off"
                  className="input"
                  placeholder="Password"
                  type={passwordType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="flex justify-around items-center"
                  onClick={() =>
                    handleTogglePassword(
                      passwordType,
                      setEyeIconPassword,
                      setPasswordType
                    )
                  }
                >
                  {isSmallDevice && (
                    <Icon
                      className="absolute mr-[8vw] mb-[3vw]"
                      icon={eyeIconPassword}
                      size={"4vw"}
                    />
                  )}
                  {!isSmallDevice && (
                    <Icon
                      className="absolute mr-10 mb-3"
                      icon={eyeIconPassword}
                      size={20}
                    />
                  )}
                </span>
              </div>
              <div>
                <input
                  id="repeatPassword"
                  autoComplete="off"
                  className="input"
                  placeholder="Repeat Password"
                  type={repeatPasswordType}
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <span
                  className="flex justify-around items-center"
                  onClick={() =>
                    handleTogglePassword(
                      repeatPasswordType,
                      setRepeatEyeIconPassword,
                      setRepeatPasswordType
                    )
                  }
                >
                  {isSmallDevice && (
                    <Icon
                      className="absolute mr-[8vw] mb-[3vw]"
                      icon={eyeIconRepeatPassword}
                      size={"4vw"}
                    />
                  )}
                  {!isSmallDevice && (
                    <Icon
                      className="absolute mr-10 mb-3"
                      icon={eyeIconRepeatPassword}
                      size={20}
                    />
                  )}
                </span>
              </div>
              <div>
                <button className="btn prim w-full" onClick={handleSignup}>
                  Sign Up
                </button>
              </div>
              <p className="text-md pt-[2vw] flex justify-center gap-0.5 sm:text-mdPC sm:pt-[10px]">
                Already have an account?
                <span
                  className="underline font-bold sm:hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Log in here
                </span>
              </p>
            </form>
            <p className="text-md font-bold py-[2vw] flex justify-center sm:text-mdPC sm:py-[10px]">
              - OR -
            </p>
            <div className="w-full flex justify-center">
              <div
                onClick={() => login()}
                className="flex justify-center items-center px-[2vw] py-[2vw] w-full bg-white borders rounded-md sm:px-[16px] sm:py-[7px] sm:hover:cursor-pointer sm:hover:bg-gray-200"
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
