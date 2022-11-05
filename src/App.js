import React, {Component} from 'react';
import Game from './components/Game.js';
import Tutorial from './components/Tutorial.js';

class App extends Component {
  toggleTutorial () {
    return (
      this.state.tutorial ? 
      <button onClick={()=>{this.setState({tutorial: false})}}>Go back to game</button> :
      <button onClick={()=>{this.setState({tutorial: true})}}>Go to tutorial</button>
    )
  }

  render () {
    return (
      <div className="App">
        {this.toggleTutorial()}
        {this.state.tutorial ? <Tutorial /> : <Game />}
      </div>
    );
  }

  constructor () {
    super();

    this.state = {
      tutorial: false,
    }
  }
}

export default App;
