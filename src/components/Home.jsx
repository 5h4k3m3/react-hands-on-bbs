import React from "react";
import "./styles/Home.css";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>
        <div className="postTextContainer">Article</div>
        <div className="nameAndDeleteButton">
          <h3>User</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
