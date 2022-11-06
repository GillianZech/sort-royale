import React, { Component } from 'react';

import BubbleGame from '../game_algorithms/BubbleGame';

import "./Game.css";

class Game extends Component {
    setCurrentNumbers = (left, right) => {
        this.setState({
            left_number: left,
            right_number: right
        })
    }

    generateRandomNumbers = (n) => {
        this.setState({number_list: []})
        let numbers = []
        let i = 0;
        let previous = 0;
        while (i < n) {
            let num = previous + (Math.floor(4 * Math.random()));
            num = this.state.allow_duplicates ? num : num + 1;
            numbers.push(num);
            previous = num;
            i += 1;
        }
        this.setState({number_list: numbers})
        return (numbers);
    }

    shuffleNumbers = () => {
        // This code was adapted from https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
        let numbers = this.state.number_list

        for (var i = numbers.length - 1; i > 0; i--) {
        
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }

        return (numbers)
    }

    toggleDuplicates = () => {
        return (
            this.state.allow_duplicates ? 
            <button onClick={() => this.setState({allow_duplicates: false})}>Prevent duplicates</button> :
            <button onClick={() => this.setState({allow_duplicates: true})}>Allow duplicates</button>
        )
    }

    handleInput = event => {
        this.setState({number_count: event.target.value})
    }

    startGame () {
        if (this.state.number_list.length < 2) {
            alert("Generate a list of numbers before starting the game!")
        } else {
            this.setState({
                game_started: true,
                number_list: this.shuffleNumbers(),
            })
        }        
    }

    render () {
        return (
            <div>
                {!this.state.game_started ? 
                <div>
                    <div className="Game">
                        <div className="number-list">
                            <button onClick={() => this.generateRandomNumbers(this.state.number_count)}>Generate random numbers</button>
                            {this.toggleDuplicates()}
                        </div>
                        <div>
                            <label htmlFor="number_count">How many numbers: </label>
                            <input type="number" id="number_count" value={this.state.number_count} min="2" max="100" onChange={this.handleInput}></input>
                        </div>
                        <div className="numbers">
                            <p>Numbers</p>
                            {this.state.number_list.map((num, index) => {
                                return(<li key={index}>{num}</li>)
                            })}
                        </div>
                        <button onClick={() => {this.startGame()}}>Start single player game</button>
                    </div>
                </div> : 
                <div className="Game-started">
                    <BubbleGame numbers = {this.state.number_list}/>
                </div>}
            </div>
        )
    }

    constructor() {
        super();
    
        this.state = {
            allow_duplicates: false,
            number_count: 10,
            number_list: [],

            game_started: false,
        }
      };
}

export default Game;