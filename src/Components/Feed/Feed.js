import React, { useEffect, useState } from "react";

import "./Feed.css";

import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => [doc.data(), doc.id]));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post[1]}
            displayName={post[0].displayName}
            userName={post[0].userName}
            verified={post[0].verified}
            text={post[0].text}
            avatar={post[0].avatar}
            image={post[0].image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
