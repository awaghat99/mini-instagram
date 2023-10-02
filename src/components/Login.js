import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "username" && password === "password") {
      props.setLoggedIn(true);
    }
  };

  return (
    <div>
      <h2>Please Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}></input>
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
