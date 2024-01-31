import React from "react";
import reactLogo from "../images/react-icon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-icon" src={reactLogo} alt="reactLogo" />
      <h3>ReactFacts</h3>
      <h2>React Course - Project 1</h2>
    </nav>
  );
}
