import React, { Component } from 'react';
import Jumbotron from './components/layout/jumbotron';
import CityCard from "./components/ClickCard";
import ScoreBoard from "./components/Scoreboard";
import city from "./city.json.js";
import Footer from "./components/Footer";
import "./App.css";


export default class App extends Component {
  state = {
    // Card,
    isClicked: false,
    score: 0,
    remaining: 9 
  }

  render() {

    return (
      <div>
        <ScoreBoard />
        <Jumbotron>
          <h1 class="header">Clicky Game!</h1>
          <h2>Click on an image to earn points but do not click on any more than once!</h2>
        </Jumbotron>
        <Container>
          <CardList>
            {this.state.city.map(city => (
              <CityCard
                key={city.id}
                name={city.name}
                id={city.id}
                image={city.image}
              />
            ))}
          </CardList>
        </Container>
        <Footer />
      </div>
    )
  }
}

