import React from "react";
import avatar from "../logos/profile-pic.jpg";
import "./Picture.css";
import heart from "../logos/heart-regular.svg";
import comment from "../logos/comment-regular.svg";
import share from "../logos/paper-plane-regular.svg";
import bookmark from "../logos/bookmark-regular.svg";

const Picture = (props) => {
  return (
    <div className="whole-post">
      <div className="post-profile-info">
        <img src={[props.avatar ? props.avatar : avatar]} alt="profile" />
        <p className="profile-name">{props.username}</p>
        <span className="post-time">{props.days}d</span>
      </div>
      <div className="picture">
        <img src={props.url} alt="random" />
      </div>
      <div className="comments-section">
        <div className="icons">
          <div className="left-icons">
            <img src={heart} className="icon" alt="icon"></img>
            <img src={comment} alt="icon" className="icon" />
            <img src={share} alt="icon" className="icon" />
          </div>
          <div className="right-icon">
            <img src={bookmark} alt="icon" className="icon" />
          </div>
        </div>
        <div className="likes">
          <p>{Math.floor(Math.random() * 250000).toLocaleString()} likes</p>
        </div>
        <div className="caption">
          <p>
            <span>{props.username}</span> {props.caption}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Picture;
