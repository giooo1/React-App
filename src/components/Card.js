import React from "react";
import CardInfo from "./Card-info";
import photo from "../images/image.png";
import photo2 from "../images/wedding-photography.png";
import data from "../data";

export default function Card() {
  const cards = data.map((item) => {
    return <CardInfo key={item.id} img={photo} {...item} />;
  });

  return <div>{cards}</div>;
}
