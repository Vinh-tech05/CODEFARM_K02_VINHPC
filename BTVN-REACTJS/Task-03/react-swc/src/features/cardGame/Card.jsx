import React from "react";

const Card = ({ id, isFlipped, isLucky, onClick }) => {
  return (
    <div
      className="card"
      style={{ transformStyle: "preserve-3d" }}
      onClick={isFlipped ? null : () => onClick(id)}
    >
      <div
        className="card-inner"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="card-back" style={{ backfaceVisibility: "hidden" }}>
          ?
        </div>
        <div
          className="card-front"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: isLucky ? "gold" : "white",
            color: isLucky ? "black" : "black",
          }}
        >
          {isLucky ? "Vàng" : "Thường"}
        </div>
      </div>
    </div>
  );
};

export default Card;
