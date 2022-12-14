import React, { Component } from 'react';
// import { MultiplayerContext } from './multiplayerContext';

import BubbleSort from '../game_algorithms/BubbleSort';
import SelectSort from '../game_algorithms/SelectSort';
import InsertionSort from '../game_algorithms/InsertionSort';

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

            left_choice: 'bubble',
            right_choice: 'bubble',
            left_algo: null,
            right_algo: null,
            left_mistakes: 0,
            right_mistakes: 0,
            left_incorrect: false,
            right_incorrect: false,

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

    incorrectAnswer(player, time=1000) {
        if (player === "left") {
            this.setState({left_mistakes: this.state.left_mistakes + 1, left_incorrect: true})
            setTimeout(() => {
                this.setState({left_incorrect: false})
            }, time)
        } else if (player === "right") {
            this.setState({right_mistakes: this.state.right_mistakes + 1, right_incorrect: true})
            setTimeout(() => {
                this.setState({right_incorrect: false})
            }, 1000)
        }
    }

    handleKey = (e) => {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }

        if (!this.state.allow_next) {
            this.setState({allow_next: true})
            return
        } else {
            this.setState({allow_next: false})
        }
        const left_keys = ['w', 'a', 's', 'd'];
        const right_keys = ['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

        if (left_keys.includes(e.key)) {
            // Check if left player is frozen
            if (this.state.left_incorrect) {
                return
            }

            // Otherwise, handle key press
            if (this.state.left_algo instanceof BubbleSort) {
                this.handleBubble(this.state.left_algo, e.key)
            } else if (this.state.left_algo instanceof SelectSort) {
                this.handleSelect(this.state.left_algo, e.key)
            } else if (this.state.left_algo instanceof InsertionSort) {
                this.handleInsertion(this.state.left_algo, e.key)
            }
        } else if (right_keys.includes(e.key)) {
            // Check if right player is frozen
            if (this.state.right_incorrect) {
                return
            }

            // Otherwise, handle key press
            if (this.state.right_algo instanceof BubbleSort) {
                this.handleBubble(this.state.right_algo, e.key)
            } else if (this.state.right_algo instanceof SelectSort) {
                this.handleSelect(this.state.right_algo, e.key)
            } else if (this.state.right_algo instanceof InsertionSort) {
                this.handleInsertion(this.state.right_algo, e.key)
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
            } else {
                if (key === 'a') {
                    this.incorrectAnswer("left")
                } else {
                    this.incorrectAnswer("right")
                }
            }
        } else if (['d', 'ArrowRight'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.moveNumber(algo.right, algo.left)
                algo.incNums()
            } else {
                if (key === 'd') {
                    this.incorrectAnswer("left")
                } else {
                    this.incorrectAnswer("right")
                }
            }
        }
    }

    handleSelect(algo, key) {
        if (['a', 'ArrowLeft'].includes(key)) {
            // Moves the "cursor" leftwards
            algo.decRight()
        } else if (['d', 'ArrowRight'].includes(key)) {
            // Moves the "cursor" rightwards
            algo.incRight()
        } else if (['w', 'ArrowUp'].includes(key)) {
            // Attempts to switch the two numbers
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.swapNumbers(algo.left, algo.right)
                algo.incLeft()
                algo.right = algo.left
            } else {
                if (key === 'w') {
                    this.incorrectAnswer("left")
                } else {
                    this.incorrectAnswer("right")
                }
            }
        } else if (['s', 'ArrowDown'].includes(key)) {
            // If there is no number that should be switched
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.incLeft()
                algo.right = algo.left
            } else {
                if (key === 's') {
                    this.incorrectAnswer("left")
                } else {
                    this.incorrectAnswer("right")
                }
            }
        }
    }

    handleInsertion(algo, key) {
        if (['a', 'ArrowLeft'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.decNums()
            } else {
                if (key === 'a') {
                    this.incorrectAnswer("left")
                } else {
                    this.incorrectAnswer("right")
                }
            }
        } else if (['d', 'ArrowRight'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.moveNumber(algo.right, algo.left)
                algo.decNums()
            } else {
                if (key === 'd') {
                    this.incorrectAnswer("left")
                } else {
                    this.incorrectAnswer("right")
                }
            }
        }
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
        let numbers = this.shuffleNumbers();
        if (this.state.number_list.length < 2) {
            alert("Generate a list of numbers before starting the game!")
        } else {
            switch (this.state.left_choice) {
                case "bubble":
                    this.setState({left_algo: new BubbleSort(numbers.map((x) => x))})
                    break
                case "select":
                    this.setState({left_algo: new SelectSort(numbers.map((x) => x))})
                    break
                case "insertion":
                    this.setState({left_algo: new InsertionSort(numbers.map((x) => x))})
                    break
                default:
                    this.setState({left_algo: new BubbleSort(numbers.map((x) => x))})
                    break
            }
            switch (this.state.right_choice) {
                case "bubble":
                    this.setState({right_algo: new BubbleSort(numbers.map((x) => x))})
                    break
                case "select":
                    this.setState({right_algo: new SelectSort(numbers.map((x) => x))})
                    break
                case "insertion":
                    this.setState({right_algo: new InsertionSort(numbers.map((x) => x))})
                    break
                default:
                    this.setState({right_algo: new BubbleSort(numbers.map((x) => x))})
                    break
            }
            this.setState({
                game_started: true,
                number_list: numbers,
            })
        }        
    }

    getDisplay(algo) {
        if (algo instanceof BubbleSort) {
            return (
                <div className='active-game'>
                    <div className="array">
                        {algo.numbers.map((num, index) => {
                            if (index === algo.left || index === algo.right) {
                                return(<b><u><li key={index}>{num}</li></u></b>)
                            } else {
                                return(<li key={index}>{num}</li>)
                            }
                        })}
                    </div>
                    <h2>Should these numbers be swapped?</h2>
                    <div className='comparison'>
                        <p>← Don't swap</p>
                        <p>Swap →</p>
                    </div>
                </div>
            )
        } else if (algo instanceof SelectSort) {
            return (
                <div>
                    <div className="array">
                        {algo.numbers.map((num, index) => {
                            if (index === algo.left || index === algo.right) {
                                return(<b><u><li key={index}>{num}</li></u></b>)
                            } else {
                                return(<li key={index}>{num}</li>)
                            }
                        })}
                    </div>
                    <h2>Find the number that should be switched with {algo.getNums()[0]}</h2>
                </div>
            )
        } else if (algo instanceof InsertionSort) {
            return (
                <div className='active-game'>
                    <p><div style={{color: "#990000"}}>Red: </div>sorted subarray</p>
                    <div className="array">
                        {algo.numbers.map((num, index) => {
                            if (index === algo.left || index === algo.right) {
                                return(
                                    <b><u><li key={index} style={index <= algo.subarray_length ? {color: "#990000"} : {}}>
                                        {num}
                                    </li></u></b>)
                            } else {
                                return(<li key={index} style={index <= algo.subarray_length ? {color: "#990000"} : {}}>{num}</li>)
                            }
                        })}
                    </div>
                    <h2>Should these numbers be swapped?</h2>
                    <div className='comparison'>
                        <p>← Don't swap</p>
                        <p>Swap →</p>
                    </div>
                </div>
            )
        }
    }

    render () {
        return (
            <div className='contain' tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
                {!this.state.game_started ? 
                <div>
                    <div className="Game">
                        <h1>Multiplayer</h1>
                        <h2>Generate numbers until you find a list you like! Choose how many numbers you want to sort and whether your list has the possibility of including duplicate numbers. The list will be shuffled once the game starts. Both players will have the same list shuffled in the same way.</h2>
                        
                        <div className="number-list">
                            <button onClick={() => this.generateRandomNumbers(this.state.number_count)}>Generate random numbers</button>
                            {this.toggleDuplicates()}
                        </div>
                        <div>
                            <label htmlFor="number_count">How many numbers: </label>
                            <input type="number" id="number_count" value={this.state.number_count} min="2" max="100" onChange={this.handleInput}></input>
                        </div>
                        <div>
                            <label htmlFor="algorithms">Choose a sorting algorithm for the left player:</label>
                            <select name="algorithms" id="algorithms" onChange={e => this.setState({left_choice: e.target.value})}>
                                <option value="bubble">Bubble Sort</option>
                                <option value="select">Select Sort</option>
                                <option value="insertion">Insertion Sort</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="algorithms">Choose a sorting algorithm for the right player:</label>
                            <select name="algorithms" id="algorithms" onChange={e => this.setState({right_choice: e.target.value})}>
                                <option value="bubble">Bubble Sort</option>
                                <option value="select">Select Sort</option>
                                <option value="insertion">Insertion Sort</option>
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
                        <div className='multiplayer-gameplay-screen'>
                            <h1>Multiplayer</h1>
                            {/* <div className='fully-wide'>a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a</div> */}

                            <div className='player-sides'>
                                <div className="left-player">
                                    <div className={this.state.left_incorrect ? "frozen" : "unfrozen"}>
                                        {this.getDisplay(this.state.left_algo)}
                                    </div>
                                </div>
                                <div className="right-player">
                                    <div className={this.state.right_incorrect ? "frozen" : "unfrozen"}>
                                        {this.getDisplay(this.state.right_algo)}
                                    </div>
                                </div>
                            </div>
                        </div> : 
                        <div>
                            <p>Winner: {this.state.winner} player!</p>
                            <p>Left player's mistakes: {this.state.left_mistakes}</p>
                            <p>Right player's mistakes: {this.state.right_mistakes}</p>
                        </div>
                        }
                </div>}
            </div>
        )
    }
}

export default Game;