import React from "react";
import "./styles/CreatePost.css";

export const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post</h1>
        <div className="inputPost">
          <div>Title</div>
          <input type="text" placeholder="post title" />
        </div>
        <div className="inputPost">
          <div>Article</div>
          <textarea placeholder="post article"></textarea>
        </div>
        <button className="postButton">Post</button>
      </div>
    </div>
  );
};
