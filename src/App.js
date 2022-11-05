import React, {Component} from 'react';
import Game from './components/Game.js';
import Multiplayer from './components/Multiplayer.js';
import Tutorial from './components/Tutorial.js';
import "./App.css";

class App extends Component {
  // toggleTitle () {
  //   return (
  //     this.state.mode === "title" ? 
  //     <button onClick={()=>{this.setState({mode: "title"})}}>Go back to game</button> :
  //     <button onClick={()=>{this.setState({mode: null})}}>Go to tutorial</button>
  //   )
  // }

  chooseScreen() {
    switch(this.state.screen) {
      case "title":
        return (null)
      case "tutorial":
        return (<Tutorial />)
      case "singleplayer":
        return (<Game />)
      case "multiplayer":
        return (<Multiplayer />)
      default:
        return (null)
    }
  }

  navButtons() {
    if (this.state.screen != null) {
      return <button onClick={()=>{this.setState({screen: null})}}>Back to title screen</button>
    } else {
      return (
        <body className='title-screen'>
          <div className="logo"> # TODO 
          </div>
          {/* <nav>
            <ul>
              <li><button onClick={() => {this.setState({screen: "tutorial"})}}>Tutorial</button></li>
              <li><button onClick={() => {this.setState({screen: "singleplayer"})}}>Single Player</button></li>
              <li><button onClick={() => {this.setState({screen: "multiplayer"})}}>Multiplayer</button></li>
            </ul>
          </nav> */}
          <nav>
            <button onClick={() => {this.setState({screen: "tutorial"})}}>Tutorial</button>
            <button onClick={() => {this.setState({screen: "singleplayer"})}}>Single Player</button>
            <button onClick={() => {this.setState({screen: "multiplayer"})}}>Multiplayer</button>
          </nav>
        </body>
      )
    }
  }

  render () {
    return (
      <div className="App">
        {this.navButtons()}
        {this.chooseScreen()}
      </div>
    );
  }

  constructor () {
    super();

    this.state = {
      screen: null,
    }
  }
}

export default App;
