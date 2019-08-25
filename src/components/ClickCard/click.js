import React from "react";
import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { promised } from "q";

export default function CardList(props) {

  return (
    // <div>
      // {props.cities.map(props => (
        <img
          id={props.id}
          onClick={() => props.handleClick(props.id)}
          alt={props.name}
          src={props.image}
          height="200px"
          width="200px"
          // rounded
        />
      // ))}
    // </div>
  )
}

// export default CardList; 
