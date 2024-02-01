import React from "react";
import star from "../images/Star.png";

export default function CardInfo(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img className="image" src={props.img} />
      {badgeText && <div className="soldout">{badgeText}</div>}
      <div className="star">
        <img className="star-icon" src={star} />
        <span className="gray">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) *</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
