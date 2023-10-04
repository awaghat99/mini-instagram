import React from "react";
import profilePic from "../logos/profile-pic.jpg";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <button
        className="logout-button"
        onClick={() => {
          props.setLoggedIn(false);
        }}>
        Log out
      </button>
      <h1>Welcome to your Instagram HomePage</h1>
      <div className="profile">
        <div className="profile-pic">
          <img src={profilePic} alt="profile-pic" />
        </div>
        <div className="follow">
          <h3>0 posts</h3>
          <h3>0 followers</h3>
          <h3>0 following</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
