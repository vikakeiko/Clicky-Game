import React from "react";
import "./style.css";

function Navbar(props) {
  return 
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <ul>
    <li className="brand">
      <a className="navbar-brand">Clicky Game</a>
    </li>
    <li className="message">Click an image to begin!</li>
    <li className="score"> 
      "Score: "
      "0"
      " | Top Score: "
      "0"
    </li>
  </ul>
</nav>
}

export default Navbar;