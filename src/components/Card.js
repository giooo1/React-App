import React from "react";
import photo from "../images/image.png";
import star from "../images/Star.png";

export default function Card() {
  return (
    <div className="card">
      <img className="image" src={photo} />
      <div className="soldout">SOLD OUT</div>
      <div className="star">
        <img className="star-icon" src={star} />
        <span className="gray">5.0 *</span>
        <span className="gray">(6)</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
