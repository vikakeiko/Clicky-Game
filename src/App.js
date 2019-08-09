import React, { Component } from 'react';
import Header from './components/layout/Header';
import FriendCard from "./components/ClickCard";
import Navbar from "./components/Navbar";
import friends from "./city.json.js";
import "./App.css";


// function App() {
//   return (
//     <Router>
//     <div>
//     <Navtabs />
//        <Route exact path="/" className={home}
//     </div>
//     </Router>
//     )
    
//   }
// }


export default class App extends Component {
    state = {
      friends: friends
    }
    render() {
      
      return (
        <div>
        <Navbar>
          <nav class="navbar">
            <ul>
              <li className="brand">
                <a>Clicky Game</a>
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
          {/* <header>
            <h1 class="header">Clicky Game!</h1>
            <h2>Click on an image to earn points but do not click on any more than once!</h2>
          </header> */}
        <h1 className="title">Friends List</h1>
          {this.state.friends.map(friend => (
            <FriendCard 
            // deleteFriend={this.deleteFriend}
            id={friend.id}
            image={friend.image}
            />
          ))}
        </Navbar>
        </div>
      )
    }
  }
  
  