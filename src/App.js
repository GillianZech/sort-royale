import React, {Component} from 'react';
import Game from './components/Game.js';
import Tutorial from './components/Tutorial.js';

class App extends Component {
  render () {
    return (
      <div className="App">
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
