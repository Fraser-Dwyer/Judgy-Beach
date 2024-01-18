import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import axios from "axios";
import googleLogo from "../Images/google-logo.png";

export default function Signup() {
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
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <>
      <div className="w-screen flex justify-center mt-[10vw] sm:mt-[100px]">
        <div className="w-4/5 text-center text-[5vw] sm:w-[800px] sm:text-[25px] sm:flex">
          <div className="w-full flex justify-center sm:w-1/2 sm:mr-[30px]">
            <img
              src={judgyBeachLogo}
              alt="Judgy Beach Logo"
              className="w-3/4 mb-[5vw] sm:w-[400px] sm:mb-0"
            ></img>
          </div>
          <div className="py-[3vw] sm:w-[400px] sm:pt-[75px]">
            <form>
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Username"></input>
              </div>
              <div className="flex justify-center sm:justify-start">
                <input className="input" placeholder="Password"></input>
              </div>
              <div className="flex justify-center sm:justify-end">
                <button className="btn prim">Sign Up</button>
              </div>
            </form>
            <p className="text-[3.5vw] pt-[2vw] sm:text-xl">
              Already have an account?{" "}
              <span
                className="underline font-bold sm:hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in here
              </span>
            </p>
            <p className="text-[4vw] font-bold py-[4vw]">- OR -</p>
            <div className="w-full flex text-[18px] justify-center sm:w-[385px]">
              <div
                onClick={() => login()}
                className="flex justify-between items-center px-[2vw] py-[1vw] bg-white border-solid border-2 border-black rounded-md"
              >
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="w-[6vw] h-[6vw] mr-[6vw]"
                />
                <p className="text-[4vw]">Sign in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
