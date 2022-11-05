import React, { Component } from 'react';
import NumberList from './NumberList.js'

class Game extends Component {
    setCurrentNumbers = (left, right) => {
        this.setState({
            left_number: left,
            right_number: right
        })
    }

    render () {
        return (
            <div className="Game">
                <div className="number-list">
                    <p>Numbers</p>
                    <NumberList />
                </div>
                <button className="left-num">{this.state.left_number}</button>
                <button className="right-num">{this.state.right_number}</button>
            </div>
        )
    }

    constructor() {
        super();
    
        this.state = {
          number_list: [],
          left_number: "",
          right_number: "",
        }
      };
}

export default Game;