import React from "react";
import airBnb from "../images/airbnb.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-icon" src={airBnb} alt="reactLogo" />
    </nav>
  );
}
