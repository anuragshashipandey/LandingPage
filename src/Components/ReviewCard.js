import React from "react";
import "../Styles/ReviewCard.css";

function ReviewCard(props) {
  const { reviewList, pic } = props;
  const name = reviewList[0],
    location = reviewList[1],
    review = reviewList[3],
    star = reviewList[2];
  return (
    <div className="ReviewCard">
      <div className="ReviewInfo">
        <div className="info">
          <img alt="profilepic" src={require(`../assets/profile${pic}.png`)} />
          <div className="userinfo">
            <p className="name">{name}</p>
            <p className="location">{location}</p>
          </div>
        </div>
        <div className="stars">
          {star}
          <img src={require("../assets/star.png")} alt="star" />
        </div>
      </div>
      <p className="Review">{review}</p>
    </div>
  );
}

export default ReviewCard;
