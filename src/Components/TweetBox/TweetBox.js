import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "../../firebase";

import "./TweetBox.css";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "furuChihaya",
      userName: "furu_Chihaya_",
      verified: true,
      text: tweet,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/media/Ev43b8iVIAA_aWK?format=png&name=small",
    });

    setTweetImage("");
    setTweet("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar src="https://pbs.twimg.com/media/Ev43b8iVIAA_aWK?format=png&name=small"></Avatar>
          <input
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What's Happening"
          ></input>
        </div>
        <input
          className="tweetBoxInputImage"
          placeholder="Optional: Enter Image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button type="submit" onClick={sendTweet} className="tweetBoxButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
