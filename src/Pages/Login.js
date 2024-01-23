import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import axios from "axios";
import googleLogo from "../Images/google-logo.png";

export default function Login() {
  const navigate = useNavigate();
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
      <div className="w-screen flex justify-center mt-[10vw] sm:mt-[75px]">
        <div className="w-4/5 text-center text-[5vw] sm:w-[800px] sm:text-[25px] sm:flex">
          <div className="w-full flex justify-center sm:items-center sm:w-1/2 sm:mr-[30px] sm:h-[60vh]">
            <img
              src={judgyBeachLogo}
              alt="Judgy Beach Logo"
              className="w-3/5 mb-[5vw] sm:min-w-[400px] sm:min-h-[400px] sm:mb-0"
            ></img>
          </div>
          <div className="py-[3vw] sm:w-[400px] sm:p-[10px]  sm:items-center">
            <form className="">
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Username"></input>
              </div>
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Password"></input>
              </div>
              <div className="flex justify-center">
                <button className="btn prim w-full">Log In</button>
              </div>
              <p className="text-[3.5vw] pt-[2vw] sm:text-[17px]">
                Don't have an account?{" "}
                <span
                  className="underline font-bold sm:hover:cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign up here
                </span>
              </p>
            </form>
            <p className="text-[4vw] font-bold py-[2vw] sm:text-[20px] sm:py-[20px]">
              - OR -
            </p>
            <div className="w-full flex text-[18px] justify-center sm:w-[385px]">
              <div
                onClick={() => login()}
                className="flex justify-center items-center px-[2vw] py-[1vw] w-full bg-white borders rounded-md sm:px-[16px] sm:py-[8px]"
              >
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-[6vw] h-[6vw] mr-[3vw] sm:w-[35px] sm:h-[35px] sm:mr-[30px]"
                />
                <p className="text-[4vw] sm:text-[18px]">Sign in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
