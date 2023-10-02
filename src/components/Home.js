import React from "react";
import Login from "./Login";
import Profile from "./Profile";

const Home = (props) => {
  return <div>{[props.loggedIn ? <Profile /> : <Login />]}</div>;
};

export default Home;
