import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';
import "./tutorials.css"

class SelectSort extends BaseTutorial {
    step_one () {
        return (
            <div>
                <div>
                    <p>The first position of the array is stored and after traveling the whole array, select the smallest element in the array and move it to the beginning of the array by swapping it with the leading element.</p>
                    <p>Let's start with an unsorted list:</p>
                    <ul>
                        <li>8</li>
                        <li>10</li>
                        <li>3</li>
                        <li>2</li>
                        <li>5</li>
                    </ul>
                    <p>In the first pass, we will compare 8 with every other number in order in the list. What's the lowest number smaller than 8?</p>
                    <button onClick={() => {this.setState({correct: false})}}>8 is the lowest.</button>
                    <button onClick={() => {this.setState({correct: false})}}>10</button>
                    <button onClick={() => {this.setState({correct: false})}}>3</button>
                    <button onClick={() => {this.setState({correct: true})}}>2</button>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! In the first pass, 8 is compared with every other number and 2 is the lowest value after it, so they swap places.</p> : 
                    <p>That's not correct, there's a lower value in the list.</p>
                    }
            </div>
            <div>
                <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
        </div>
        )
    }
    step_two () {
        return (
            <div>
                <div>
                    <p>This process repeats until the second to last element is compared with the final element.</p>
                    <ul>
                        <li>2</li>
                        <li className = "bold">10</li>
                        <li>3</li>
                        <li>8</li>
                        <li>5</li>
                    </ul>
                    <p>In the second pass, we will compare 10 with every other number in order in the list. What's the lowest number smaller than 10?</p>
                    <button onClick={() => {this.setState({correct: false})}}>8 is the lowest.</button>
                    <button onClick={() => {this.setState({correct: false})}}>10</button>
                    <button onClick={() => {this.setState({correct: false})}}>3</button>
                    <button onClick={() => {this.setState({correct: true})}}>2</button>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! In the first pass, 8 is compared with every other number and 2 is the lowest value after it, so they swap places.</p> : 
                    <p>That's not correct, there's a lower value in the list.</p>
                    }
            </div>
            <div>
                <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
        </div>
        )
    }
    render () {
        return (
            <div>

            </div>
        )
    }

    constructor () {
        let startingNumbers = [5, 2, 9, 6, 3];
    }
}

export default SelectSort;