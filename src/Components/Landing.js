import React, { useState, useRef } from "react";
import Card from "./Card";
import "../Styles/Landing.css";
import ReviewCard from "./ReviewCard";

//
function Landing() {
  const list = [
    [
      "Free Plan",
      "Free",
      [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
    ],
    [
      "Standard Plan",
      "$9",
      [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
    ],
    [
      "Premium Plan",
      "$12",
      [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
    ],
  ];
  const reviewList = [
    [
      "Viezh Robert",
      "Warsaw, Poland",
      "4.5",
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    ],
    [
      "Yessica Christy",
      "Shanxi, China",
      "4.5",
      "“I like it because I like to travel far and still can connect with high speed.”.",
    ],
    [
      "Kim Young Jou",
      "Seoul, South Korea",
      "4.5",
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    ],
  ];

  const reviewRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const executeScrollLeft = () => {
    if (activeDot < 3) setActiveDot(activeDot + 1);
    reviewRef.current.scrollTo({
      left: reviewRef.current.scrollLeft + reviewRef.current.scrollWidth / 4,
      top: reviewRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const executeScrollRight = () => {
    if (activeDot > 0) setActiveDot(activeDot - 1);

    reviewRef.current.scrollTo({
      left: reviewRef.current.scrollLeft - reviewRef.current.scrollWidth / 4,
      top: reviewRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  let cards = [],
    reviewCards = [],
    dots = [];
  let [active, setActive] = useState([0, 0, 0]);
  function handleClick(i) {
    active = [0, 0, 0];
    active[i] = 1;
    setActive([...active]);
    console.log("card clicked", active);
  }
  for (let i = 0; i < 3; i++)
    cards.push(
      <Card
        active={active[i]}
        onClick={() => {
          handleClick(i);
        }}
        selection={() => handleClick(i)}
        list={list[i]}
        key={list[i][0]}
      />
    );
  for (let i = 0; i < 9; i++)
    reviewCards.push(
      <ReviewCard
        reviewList={reviewList[i % 3]}
        key={reviewList[0] + i}
        pic={i % 3}
      />
    );
  for (let i = 0; i < 4; i++)
    dots.push(
      <div
        className={activeDot === i ? "activedot" : "dot"}
        key={"dot" + i}
      ></div>
    );
  return (
    <div className="Landing">
      <div className="headerTop">
        <div className="headerTopLeft">
          <p
            style={{ fontSize: "190%", textAlign: "start", fontWeight: "500" }}
          >
            Want anything to be easy with <b>LaslesVPN.</b>
          </p>
          <p style={{ fontSize: "70%", textAlign: "start", color: "#4F5665" }}>
            Provide a network for all your needs with ease and fun using
            <b> LaslesVPN</b> discover interesting features from us.
          </p>
          <div className="btn_header">Get Started</div>
        </div>
        <img
          className="banner"
          src={require("../assets/banner.png")}
          alt="pic"
        />
      </div>
      <p style={{ fontSize: "200%", fontWeight: "500" }}>Choose Your Plan</p>
      <p style={{ fontColor: "#4F5665", fontWeight: "400" }}>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="Plans">{cards}</div>
      <p className="reviewheading">Trusted by Thousands of Happy Customer</p>
      <p className="reviewsubheading">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className="reviews" ref={reviewRef}>
        {reviewCards}
      </div>
      <div className="scroll">
        <div className="dots">{dots}</div>
        <div className="arrow">
          <img
            className="left"
            alt="left"
            onClick={() => {
              executeScrollRight();
            }}
            src={require("../assets/arrowl.png")}
          />
          <img
            className="right"
            alt="right"
            onClick={() => {
              console.log(reviewRef);

              executeScrollLeft();
            }}
            src={require("../assets/arrowr.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
