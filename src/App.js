import React, { Component } from 'react';
import Jumbotron from './components/layout/jumbotron';
import CityCard from "./components/ClickCard";
import Navbar from "./components/Navbar";
import city from "./city.json.js";
import "./App.css";


export default class App extends Component {
  state = {
    score: score,
    isClicked: false 
  }
  
  render() {

    return (
      <div>
        <Navbar />
        <Jumbotron>
          <h1 class="header">Clicky Game!</h1>
          <h2>Click on an image to earn points but do not click on any more than once!</h2>
        </Jumbotron>
        <Container>
          <CardList>
            {this.state.friends.map(friend => (
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

