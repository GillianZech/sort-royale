import React, { Component } from 'react';
// import { MultiplayerContext } from './multiplayerContext';

import BubbleGame from '../game_algorithms/BubbleGame';
import BubbleMulti from './multiplayer_algos/BubbleMulti';
import SelectMulti from './multiplayer_algos/SelectMulti';
// import MultiplayerScreen from './MultiplayerScreen.js'

import "./Game.css";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            allow_next: true,
            game_started: false,
            allow_duplicates: false,
            number_count: 10,
            number_list: [],

            left_nums: [],
            right_nums: [],
            left_algo: null,
            right_algo: null,

            winner: null
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
        if (!this.state.allow_next) {
            this.setState({allow_next: true})
            return
        } else {
            this.setState({allow_next: false})
        }
        const left_keys = ['w', 'a', 's', 'd'];
        const right_keys = ['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

        if (left_keys.includes(e.key)) {
            if (this.state.left_algo instanceof BubbleMulti) {
                this.handleBubble(this.state.left_algo, e.key)
            } else if (this.state.left_algo instanceof SelectMulti) {
                this.handleSelect(this.state.left_algo, e.key)
            }

        } else if (right_keys.includes(e.key)) {
            if (this.state.right_algo instanceof BubbleMulti) {
                this.handleBubble(this.state.right_algo, e.key)
            }else if (this.state.right_algo instanceof SelectMulti) {
                this.handleSelect(this.state.right_algo, e.key)
            }
        }

        if(this.state.left_algo.checkIsSorted()) {
            this.setState({winner: "left"})
        } else if (this.state.right_algo.checkIsSorted()) {
            this.setState({winner: "right"})
        }
    }

    handleBubble(algo, key) {
        if (['a', 'ArrowLeft'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.incNums()
                this.setState({left_nums: this.state.left_algo.numbers, right_nums: this.state.right_algo.numbers})
            } 
        } else if (['d', 'ArrowRight'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.moveNumber(algo.right, algo.left)
                algo.incNums()
                this.setState({left_nums: this.state.left_algo.numbers, right_nums: this.state.right_algo.numbers})
            } 
        }
    }

    handleSelect(algo, key) {
        if (['w', 'ArrowUp'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.swapNumbers(algo.left, algo.right)
                algo.incLeft()
                algo.right = algo.left
            }
        } else if (['s', 'ArrowDown'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.incRight()
            }
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
        let numbers = this.shuffleNumbers();
        if (this.state.number_list.length < 2) {
            alert("Generate a list of numbers before starting the game!")
        } else {
            this.setState({
                game_started: true,
                number_list: numbers,
                left_algo: new BubbleMulti(numbers.map((x) => x)),
                right_algo: new BubbleMulti(numbers.map((x) => x)),
            })
        }        
    }

    render () {
        return (
            <div tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
                {!this.state.game_started ? 
                <div>
                    <div className="Game">
                        <h1>Multiplayer</h1>
                        <h2>Generate numbers until you find a list you like! Choose how many numbers you want to sort and whether your list has the possibility of including duplicate numbers. </h2>
                        
                        <div className="number-list">
                            <button onClick={() => this.generateRandomNumbers(this.state.number_count)}>Generate random numbers</button>
                            {this.toggleDuplicates()}
                        </div>
                        <div>
                            <label htmlFor="number_count">How many numbers: </label>
                            <input type="number" id="number_count" value={this.state.number_count} min="2" max="100" onChange={this.handleInput}></input>
                        </div>
                        <div>
                            <label for="algorithms">Choose a sorting algorithm for the left player:</label>
                            <select name="algorithms" id="algorithms" onChange={e => this.setState({left_algo: e.target})}>
                            <option value="bubble">Bubble Sort</option>
                            <option value="select">Select Sort</option>
                            </select>
                        </div>
                        <div>
                            <label for="algorithms">Choose a sorting algorithm for the right player:</label>
                            <select name="algorithms" id="algorithms">
                            <option value="bubble">Bubble Sort</option>
                            <option value="select">Select Sort</option>
                            </select>
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
                    {this.state.winner === null ? 
                        <div>
                            <div className="left-player">
                                {this.state.left_algo.numbers.map((num, index) => {return(<li key={index}>{num}</li>)})}
                                <p>Which is smaller?</p>
                                <p>{this.state.left_algo.getNums()[0]}</p>
                                <p>{this.state.left_algo.getNums()[1]}</p>
                            </div>
                            <div className="right-player">
                                {this.state.right_algo.numbers.map((num, index) => {return(<li key={index}>{num}</li>)})}
                                <p>Which is smaller?</p>
                                <p>{this.state.right_algo.getNums()[0]}</p>
                                <p>{this.state.right_algo.getNums()[1]}</p>
                            </div>
                        </div> : 
                        <div>
                            <p>Winner: {this.state.winner} player!</p>
                        </div>
                        }
                </div>}
            </div>
        )
    }
}

export default Game;