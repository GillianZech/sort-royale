import React, { Component } from 'react';
import NumberList from './NumberList.js'

class Game extends Component {
    setCurrentNumbers = (left, right) => {
        this.setState({
            left_number: left,
            right_number: right
        })
    }

    generateRandomNumbers = (n) => {
        let numbers = []
        let i = 0;
        let previous = 0;
        while (i < n) {
            let num = previous + (Math.floor(4 * Math.random()))
            numbers.push(num)
            previous = num
            i += 1;
        }
        return (numbers);
    }

    render () {
        return (
            <div className="Game">
                <div className="number-list">
                    <p>Numbers</p>
                    <div>
                    {this.generateRandomNumbers(5).map((num) => {
                        return(<p>num</p>)
                    })}
                </div>
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