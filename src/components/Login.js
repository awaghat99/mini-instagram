import { useState, useRef } from "react";
import phoneImg from "../logos/home-phones-2x-overlay.png";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "username" && password === "password") {
      props.setLoggedIn(true);
    } else {
      window.alert("Incorrect Username or Password");
      formRef.current.reset();
    }
  };

  return (
    <div className="login-page">
      <div className="phone-img">
        <img src={phoneImg} alt="phone" />
      </div>
      <div className="whole-login">
        <h2>Instagram</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"></input>
          <br />
          <input
            type="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"></input>
          <br />
          <button type="submit" className="button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
