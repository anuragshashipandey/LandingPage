import React from "react";
import "../Styles/Card.css";
function Card(props) {
  const { list, active } = props;
  const plan = list[0],
    price = list[1];
  return (
    <div
      className={active === 1 ? "ActiveCard" : "Card"}
      onClick={props.onClick}
    >
      <div>
        <img className="boxpic" src={require("../assets/box.png")} alt="box" />
        <p className="planname">{plan}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {list[2].map((x) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              key={x}
            >
              <img
                style={{
                  maxWidth: "13.33px",
                  maxHeight: "9.07px",
                  alignSelf: "center",
                  magin: "2px",
                }}
                src={require("../assets/Tick.png")}
                alt="tick"
              />
              <p className="planpoints">{x}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontSize: "1.3vw" }}>
          <b>{price}</b>
          {price[0] === "$" ? "/ mo" : ""}
        </p>
        <div>
          <p className={active === 1 ? "activeBtn" : "btn"}>Select</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
