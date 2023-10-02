import React from "react";
import compass from "../logos/icons8-compass-50.png";
import home from "../logos/icons8-home-50.png";
import Main from "./Main";
import Home from "./Home";

const Sidebar = (props) => {
  const handleHomeClick = () => {
    props.setPageToRender(<Home key="2" />);
  };

  const handleExploreClick = () => {
    props.setPageToRender(<Main />);
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
