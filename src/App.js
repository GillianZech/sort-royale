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

  navButtons() {// This is either the title page or the nav menu at the bottom
                // of almost every page to return to the title page.
    if (this.state.screen != null) {
      return (
        <div className='back-to-title-screen'>
          <button className='back-to-title-screen-button' onClick={()=>{this.setState({screen: null})}}>Back to title screen</button>
          {/* Button to go to a settings page? Maybe for accessibility options. */}
          {/* <button onClick={()=>{this.setState({screen: null})}}>Back to title screen</button> */}
        </div>
      )
    } else {
      return (
        <div className='title-screen'>
        {/* <div> */}
          <div className="logo"> 
            <p>░██████╗░█████╗░██████╗░████████╗  ██████╗░░█████╗░██╗░░░██╗░█████╗░██╗░░░░░███████╗</p>
            <p>██╔════╝██╔══██╗██╔══██╗╚══██╔══╝  ██╔══██╗██╔══██╗╚██╗░██╔╝██╔══██╗██║░░░░░██╔════╝</p>
            <p>╚█████╗░██║░░██║██████╔╝░░░██║░░░  ██████╔╝██║░░██║░╚████╔╝░███████║██║░░░░░█████╗░░</p>
            <p>░╚═══██╗██║░░██║██╔══██╗░░░██║░░░  ██╔══██╗██║░░██║░░╚██╔╝░░██╔══██║██║░░░░░██╔══╝░░</p>
            <p>██████╔╝╚█████╔╝██║░░██║░░░██║░░░  ██║░░██║╚█████╔╝░░░██║░░░██║░░██║███████╗███████╗</p>
            <p>╚═════╝░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝</p>
          </div>
          <header>
            <p>    ░██████╗░█████╗░██████╗░████████╗</p>
            <p>    ██╔════╝██╔══██╗██╔══██╗╚══██╔══╝</p>
            <p>    ╚█████╗░██║░░██║██████╔╝░░░██║░░░</p>
            <p>    ░╚═══██╗██║░░██║██╔══██╗░░░██║░░░</p>
            <p>    ██████╔╝╚█████╔╝██║░░██║░░░██║░░░</p>
            <p>    ╚═════╝░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░</p>
            <p>██████╗░░█████╗░██╗░░░██╗░█████╗░██╗░░░░░███████╗</p>
            <p>██╔══██╗██╔══██╗╚██╗░██╔╝██╔══██╗██║░░░░░██╔════╝</p>
            <p>██████╔╝██║░░██║░╚████╔╝░███████║██║░░░░░█████╗░░</p>
            <p>██╔══██╗██║░░██║░░╚██╔╝░░██╔══██║██║░░░░░██╔══╝░░</p>
            <p>██║░░██║╚█████╔╝░░░██║░░░██║░░██║███████╗███████╗</p>
            <p>╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝</p>
          </header>
          <h2 className='title-h2'>A game of quick fingers and strategic sorting algorithms</h2>
          <nav>
            <button className="title-screen-button gradient" onClick={() => {this.setState({screen: "tutorial"})}}>Tutorial</button>
            <button className="title-screen-button" onClick={() => {this.setState({screen: "singleplayer"})}}>Single Player</button>
            <button className="title-screen-button" onClick={() => {this.setState({screen: "multiplayer"})}}>Multiplayer</button>
          </nav>
          <footer>
            <p>Made by students at the University of North Carolina at Chapel Hill for HackNC 2022</p>
            <p>Background image from <a href='https://www.vecteezy.com/'>Vecteezy.com</a></p>
          </footer>
      {/* </div> */}
      </div>
      )
    }
  }

  render () {
    return (
      <body className="App">
        {this.chooseScreen()}
        {this.navButtons()}
      </body>
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
