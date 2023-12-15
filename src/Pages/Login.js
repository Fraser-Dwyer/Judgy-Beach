import "../Styles/Login.css";
import judgyBeachLogo from "../Images/judgyBeachLogo.png";

export default function Login({ baseURL }) {
  return (
    <>
      <div className="loginContainer">
        <div className="logoContainer">
          <img src={judgyBeachLogo} alt="Judgy Beach logo" />
        </div>
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
      </div>
    </>
  );
}
