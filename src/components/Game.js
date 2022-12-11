import React, { Component } from 'react';

// import BubbleGame from '../game_algorithms/BubbleGame';
// import SelectGame from '../game_algorithms/SelectGame';

import BubbleSort from '../game_algorithms/BubbleSort';
import SelectSort from '../game_algorithms/SelectSort';

import Stopwatch from '../game_algorithms/stopwatch';

import "./Game.css";

class Game extends Component {
    constructor() {
        super();
    
        this.state = {
            allow_duplicates: false,
            number_count: 10,
            number_list: [],
            choice: 'bubble',
            algo: null,
            incorrect: false,
            allow_next: true,

            game_started: false,
            complete: false,
            start_time: null,
        }
        this.myDiv = React.createRef();
      };

    componentDidMount() {
        this.myDiv.current.addEventListener('keydown', this.handleKey);
        this.myDiv.current.focus();
    }

    componentWillUnmount() {
        this.myDiv.current.removeEventListener('keydown', this.handleKey);
    }

    handleKey = (e) => {
        if (!this.state.game_started) {
            return
        }

        // Prevent moving the page with keys
        if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
            e.preventDefault();
        }

        // Prevent functions from being run twice
        // Still not sure why this actually happens
        if (!this.state.allow_next) {
            this.setState({allow_next: true})
            return
        } else {
            this.setState({allow_next: false})
        }

        // Handle key press for whatever algorithm was chosen
        if (this.state.algo instanceof BubbleSort) {
            this.handleBubble(this.state.algo, e.key)
        } else if (this.state.algo instanceof SelectSort) {
            this.handleSelect(this.state.algo, e.key)
        }

        // Check if the array is fully sorted
        if (this.state.algo.checkIsSorted()) {
            this.setState({complete: true})
        } 
    }

    handleBubble(algo, key) {
        if (['a', 'ArrowLeft'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.incNums()
                this.setState({incorrect: false})
            } else {
                this.setState({incorrect: true})
            }
        } else if (['d', 'ArrowRight'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.moveNumber(algo.right, algo.left)
                algo.incNums()
                this.setState({incorrect: false})
            } else {
                this.setState({incorrect: true})
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
                this.setState({incorrect: false})
            } else {
                this.setState({incorrect: true})
            }
        } else if (['s', 'ArrowDown'].includes(key)) {
            let correct = algo.checkCorrect(key)
            if (correct) {
                algo.incRight()
                this.setState({incorrect: false})
            } else {
                this.setState({incorrect: true})
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
            <button onClick={() => this.setState({allow_duplicates: false})}>Prevent duplicates?</button> :
            <button onClick={() => this.setState({allow_duplicates: true})}>Allow duplicates?</button>
        )
    }

    handleInput = event => {
        this.setState({number_count: event.target.value})
    }

    startGame () {
        if (this.state.number_list.length < 2) {
            alert("Generate a list of numbers before starting the game!")
        } else {
            let numbers = this.shuffleNumbers();
            switch (this.state.choice) {
                case "bubble":
                    this.setState({algo: new BubbleSort(numbers.map((x) => x))})
                    break
                case "select":
                    this.setState({algo: new SelectSort(numbers.map((x) => x))})
                    break
                default:
                    this.setState({algo: new BubbleSort(numbers.map((x) => x))})
                    break
            }

            this.setState({
                game_started: true,
                number_list: numbers,
                start_time: new Date(),
            })
        }        
    }

    finish_game() {
        let end_time = new Date();
        let time_passed = end_time - this.state.start_time;

        return(
            <div className="time_numbers">
                <span>{("0" + Math.floor((time_passed / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time_passed / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time_passed / 10) % 100)).slice(-2)}</span>
            </div>
        )
    }

    getDisplay(algo) {
        if (algo instanceof BubbleSort) {
            return (
                <div className='active-game'>
                    <h2>Which number is smaller?</h2>
                    <div className='comparison'>
                        <p>{algo.getNums()[0]}</p>
                        <p>{algo.getNums()[1]}</p>
                    </div>
                </div>
            )
        } else if (algo instanceof SelectSort) {
            return (
                <div>
                    <h2>Is this the smallest number after/including {algo.getNums()[0]}</h2>
                    <p>{algo.getNums()[1]}</p>
                </div>
            )
        }
    }

    render () {
        return (
            <div className='game-container'  tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
                {!this.state.game_started ? 
                    <div className="Game">
                        <h1>Single Player</h1>
                        <h2>Generate numbers until you find a list you like! Choose how many numbers you want to sort and whether your list has the possibility of including duplicate numbers. The list will be shuffled once the game starts.</h2>
                        
                        <div className="number-list">
                            <div className='quantity'>
                                <label htmlFor="number_count">How many numbers do you want to sort? </label>
                                <input type="number" id="number_count" value={this.state.number_count} min="2" max="100" onChange={this.handleInput}></input>
                            </div>

                            <div className='duplicates'>
                                {this.toggleDuplicates()}
                                {this.state.allow_duplicates ? <p>Duplicates are allowed</p> : <p>Duplicates are not allowed</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="algorithms">Choose a sorting algorithm to use:</label>
                            <select name="algorithms" id="algorithms" onChange={e => this.setState({left_choice: e.target.value})}>
                            <option value="bubble">Bubble Sort</option>
                            <option value="select">Select Sort</option>
                            </select>
                        </div>

                        <button className='generate' onClick={() => this.generateRandomNumbers(this.state.number_count)}>Generate random numbers</button>
                        <h2>Numbers</h2>
                        <div className="numbers">
                            {this.state.number_list.map((num, index) => {
                                return(<li key={index}>{num}</li>)
                            })}
                        </div>
                        <button className='start' onClick={() => {this.startGame()}}>Start single player game</button>
                    </div>
                : 
                <div className="Game-started">
                    {/* <BubbleGame numbers = {this.state.number_list}/>
                    <SelectGame numbers = {this.state.number_list}/> */}

                    {!this.state.complete ? 
                        <div>
                            <h1>Single Player</h1>
                            <div className="numbers">
                                {this.state.algo.numbers.map((num, index) => {
                                    return(<li key={index}>{num}</li>)
                                })}
                            </div>
                            <div>
                                {this.getDisplay(this.state.algo)}
                                {this.state.incorrect ? <p>❌</p> : null}
                            </div>
                            <div className='timer'>
                                <Stopwatch glob = {this.state.time}/>
                            </div>
                        </div> :
                        <div>
                            <p>You win!</p>
                            <p>Your time: </p>
                            {this.finish_game()}
                        </div>
                }
            </div>}
        </div>
        )
    }
}

export default Game;