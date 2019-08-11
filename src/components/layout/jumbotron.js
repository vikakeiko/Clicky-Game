

// function Header() {
//     return (
//         <header>
//         <h1 className="header">Clicky Game!</h1>
//         <h2>Click on an image to earn points but do not click on any more than once!</h2>
//       </header>
//     )
// }


import React from "react";

function Jumbotron(props) {

  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {props.children}
    </div>
  );
}

export default Jumbotron;