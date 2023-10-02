import React from "react";
import compass from "../logos/icons8-compass-50.png";
import home from "../logos/icons8-home-50.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Instagram</h3>
      <div className="home button">
        <img src={home} alt={home} />
        <h3>Home</h3>
      </div>
      <div className="explore button">
        <img src={compass} alt="compass" />
        <h3>Explore</h3>
      </div>
    </div>
  );
};

export default Sidebar;
