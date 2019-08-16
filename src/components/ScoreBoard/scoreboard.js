import React from "react";
import "./style.css";

function Scoreboard(props) {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link>Clicky Game</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Click an image to begin!</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Your Score: {props.score}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Cards Left: {props.remaining}</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Scoreboard;