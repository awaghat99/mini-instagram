import React from "react";
import compass from "../logos/icons8-compass-50.png";
import home from "../logos/icons8-home-50.png";
import Gallery from "./Gallery";
import Login from "./Login";

const Sidebar = (props) => {
  const handleHomeClick = () => {
    props.setPageToRender(<Login />);
  };

  const handleExploreClick = () => {
    props.setPageToRender(<Gallery />);
  };

  return (
    <div className="side">
      <h3>Instagram</h3>
      <div className="all-panels">
        <div className="home panel" onClick={handleHomeClick}>
          <img src={home} alt={home} />
          <h3>Home</h3>
        </div>
        <div className="explore panel" onClick={handleExploreClick}>
          <img src={compass} alt="compass" />
          <h3>Explore</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
