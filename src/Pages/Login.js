import "../Styles/Login.css";
import judgyBeachLogo from "../Images/judgyBeachLogo.png";
import { useNavigate } from "react-router-dom";

export default function Login({ baseURL }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="loginContainer">
        <div className="logoContainer">
          <img src={judgyBeachLogo} alt="Judgy Beach logo" />
        </div>
        <div className="outerFormContainer">
          <div className="formContainer">
            <h2>Login</h2>
            <form className="inputForm">
              <div>
                <input placeholder="Username"></input>
              </div>
              <div>
                <input placeholder="Password"></input>
              </div>
              <div className="buttonContainer">
                <button>Login</button>
              </div>
            </form>
          </div>
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign up here</span>
          </p>
        </div>
      </div>
    </>
  );
}
