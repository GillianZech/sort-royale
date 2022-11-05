import React, { Component } from 'react';
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

    render () {
        return (
            <div className="Game">
                <div className="number-list">
                    <p>Numbers</p>
                    <button onClick={() => this.generateRandomNumbers(this.state.number_count)}>Generate random numbers</button>
                    {this.toggleDuplicates()}
                </div>
                <div>
                    <label htmlFor="number_count">How many numbers: </label>
                    <input type="number" id="number_count" value={this.state.number_count} min="2" max="100" onChange={this.handleInput}></input>
                </div>
                <div className="numbers">
                    {this.state.number_list.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                </div>
                {/* <button className="left-num">{this.state.left_number}</button>
                <button className="right-num">{this.state.right_number}</button> */}
            </div>
        )
    }

    constructor() {
        super();
    
        this.state = {
            allow_duplicates: false,
            number_count: 10,
            number_list: [],
            left_number: "",
            right_number: "",
        }
      };
}

export default Game;