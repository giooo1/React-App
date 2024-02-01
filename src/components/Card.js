import React from "react";
import CardInfo from "./Card-info";
import data from "../data";

export default function Card() {
  const cards = data.map((item) => {
    return <CardInfo key={item.id} {...item} />;
  });

  return <div>{cards}</div>;
}
