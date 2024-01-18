import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

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
                <button className="btn prim">Login</button>
              </div>
            </form>
            <p className="text-[3.5vw] pt-[2vw] sm:text-xl">
              Don't have an account?{" "}
              <span
                className="underline sm:hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in here
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
