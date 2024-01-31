import axios from "axios";
import googleLogo from "../Images/google-logo.png";
import Branding from "../Components/Branding";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";

// Imports for the password eye
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Login({ baseURL }) {
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1280px)");

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  // States of the eye for the password fields
  const [passwordType, setPasswordType] = useState("password");
  const [eyeIconPassword, setEyeIconPassword] = useState(eyeOff);

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

  async function handleLogin(e) {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      console.log("Enter something");
      return;
    }

    var usernameLower = username.toLowerCase();
    const response = await fetch(baseURL + "/login", {
      method: "POST",
      body: JSON.stringify({ username: usernameLower, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        console.log(userInfo);
        window.localStorage.setItem(
          "CURRENT_USER_INFO",
          JSON.stringify(userInfo)
        );
        console.log("Login good ya");
        navigate("/");
      });
    } else {
      console.log("login not good na");
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
        <Branding />
        <div className="py-[8vw] flex justify-center sm:p-[10px] sm:items-center sm:w-[40%] sm:h-[100dvh]">
          <div className="w-3/4 borders bg-white p-[4vw] sm:max-w-[400px] sm:p-[20px]">
            <p className="text-xl font-bold text-left mb-[2vw] sm:text-xlPC sm:mb-[10px]">
              Log In
            </p>
            <form className="[&>div]:flex [&>div]:justify-center [&>div]:sm:justify-start">
              <div>
                <input
                  id="firstName"
                  className="input"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div>
                <input
                  id="password"
                  className="input"
                  placeholder="Password"
                  type={passwordType}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
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
                <button
                  className="btn prim w-full"
                  onClick={(e) => handleLogin(e)}
                >
                  Log In
                </button>
              </div>
              <p className="text-md pt-[2vw] flex justify-center gap-0.5 sm:text-mdPC sm:pt-[10px]">
                Don't have an account?
                <span
                  className="underline font-bold sm:hover:cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign up here
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
