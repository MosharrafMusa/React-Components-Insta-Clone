// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";

const LikeSection = props => {
  const [likes, setLikes] = useState(0);
  console.log("This is from LikeSection", props);
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i
            className="fa fa-heart"
            onClick={() => {
              setLikes(likes + 1);
            }}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="fa fa-comment" />
        </div>
      </div>
      <div className="like-number">0 {setLikes}likes</div>
    </div>
  );
};

export default LikeSection;
