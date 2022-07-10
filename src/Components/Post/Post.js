import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@material-ui/icons";
import VerifiedUserSharpIcon from "@material-ui/icons/VerifiedUserSharp";
import React, { forwardRef } from "react";

import "./Post.css";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="postAvatar">
          <Avatar src={avatar} />
        </div>
        <div className="postBody">
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {displayName}{" "}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedUserSharpIcon className="postBadge" />}@
                  {userName}
                </span>
              </h3>
            </div>

            <div className="postHeaderDescription">
              <p>{text}</p>
            </div>
          </div>

          <img src={image} alt=""></img>

          <div className="postFooter">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
