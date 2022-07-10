import React from "react";

import "./Widget.css";

import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widgetInput">
        <Search className="widgetSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId="1371084486637715461" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="furu_Chihaya_"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://localhost:3000"}
          options={{ text: "Learn React JS", via: "Nilesh" }}
        />
      </div>
    </div>
  );
};

export default Widget;
