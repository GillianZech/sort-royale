import React, { Component } from 'react';
// import { MultiplayerContext } from './multiplayerContext';

import BubbleGame from '../game_algorithms/BubbleGame';
// import MultiplayerScreen from './MultiplayerScreen.js'

import "./Game.css";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            game_started: false,
            allow_duplicates: false,
            number_count: 10,
            number_list: [],

            left_nums: [],
            right_nums: [],
        }
        this.myDiv = React.createRef();
    }

    componentDidMount() {
        this.myDiv.current.addEventListener('keydown', this.handleKey);
        this.myDiv.current.focus();
    }

    componentWillUnmount() {
        this.myDiv.current.removeEventListener('keydown', this.handleKey);
    }

    handleKey = (e) => {
        const left_keys = ['w', 'a', 's', 'd'];
        const right_keys = ['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

        if (left_keys.some(e.key)) {

        } else if (right_keys.some(e.key)) {

        }

        this.setState({incorrect: false})
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            if (this.state.allow_next) {
                if (this.check_answer("left")) {
                    // Left is smaller, go to next numbers
                    this.getNextNumbers();
                } else {
                    // Player was wrong, mark incorrect
                    this.setState({incorrect: true})
                }
                this.setState({allow_next: false})
            } else{
                this.setState({allow_next: true})
            }
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            if (this.state.allow_next) {
            if (this.check_answer("right")) {
                // Right is smaller, switch numbers and go next
                this.moveNumber(this.state.right_index, this.state.left_index);
                this.getNextNumbers();
            } else {
                // Player was wrong, mark incorrect
                this.setState({incorrect: true})
            }
            this.setState({allow_next: false})
        } else {this.setState({allow_next: true})}
        }
    }
    
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
        this.setState({number_list: numbers, left_nums: numbers, right_nums: numbers})
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
            <div tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
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
                        <button onClick={() => {this.startGame()}}>Start multiplayer game</button>
                    </div>
                </div> : 
                <div className="Game-started">
                        <div className="left-player">
                            {this.state.number_list.map((num, index) => {return(<li key={index}>{num}</li>)})}
                        </div>
                        <div className="right-player">
                            {this.state.number_list.map((num, index) => {return(<li key={index}>{num}</li>)})}
                        </div>
                </div>}
            </div>
        )
    }
}

export default Game;