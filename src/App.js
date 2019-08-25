import React from 'react';
import './App.css';
// import Jumbotron from './components/Jumbotron/jumbotron';
import ClickCard from "./components/ClickCard/Click";
// import ScoreBoard from "./components/ScoreBoard/scoreboard";
import card from "./city.json";
import "./App.css";
// import Container from './components/Container';
// import CardList from './components/CardList';
// import Row from 'react-bootstrap/Row';


export default class App extends React.Component {
  state = {
    card,
    isClicked: [],
    score: 0,
    remaining: 9
  };


  // algorithm 
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
  };

  // clicked logic function
  // if clicked, add to clicked array. if it is already in array => lose game
  handleClick = (id) => {
    alert("バカじゃない?");
    if (this.state.score === 9) {
      alert("YOU WIN!!");
      this.resetGame();
    } else if (this.state.isClicked.includes(id)) {
      alert("YOU LOST!!");
      this.resetGame();
    } else {
      this.state.isClicked.push(id);
      this.setState({
        card: this.shuffleArray(this.state.card),
        score: this.state.score + 1,
        remaining: this.state.remaining - 1
      });
    }
  };

  resetGame = () => {
    this.setState({
      isClicked: [],
      score: 0,
      remaining: 9
    });
  };


  render() {

    return (
      <div className="row">
        <div className="col-md-10">
          <p>Current Score: {this.state.score}</p>
          <p>Remaining Score: {this.state.remaining}</p>
          {/* <ScoreBoard
            score={this.state.score}
            remaining={this.state.remaining}
          /> */}
          {/* <Jumbotron>
            <h1 className="header">Clicky Game!</h1>
            <h2>Click on an image to earn points but do not click on any more than once!</h2>
          </Jumbotron> */}
          {/* <CardList> */}
            {this.state.card.map(e => {
              return <ClickCard
                  key={e.id}
                  id={e.id}
                  image={e.image}
                  handleClick={this.handleClick}
                  // onClick={() => props.handleClick(props.id)}
                  // handleClick={e.handleClick}
                />
            })}
          {/* </CardList> */}
        </div>
      </div>
    );
  };
}

// export default App; 

