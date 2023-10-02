import React from "react";
import Login from "./Login";
import Gallery from "./Gallery";

const Main = (props) => {
  return <div>{[props.loggedIn ? <Gallery /> : <Login />]}</div>;
};

export default Main;
