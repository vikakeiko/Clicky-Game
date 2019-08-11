import React from "react";
import "./style.css";
import { promised } from "q";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <h1>{props.name}</h1>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
