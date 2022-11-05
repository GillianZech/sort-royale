import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';

class BubbleSort extends BaseTutorial {
    step_one () {
        let numbers = [3, 6, 5, 8, 4];

        return (
            <div>
                <div>
                    <p>Bubble sort is the simplest sorting algorithm as it compares two adjacent elements, and then changes position if one is greater than the other. This process repeats until the array is fully sorted.</p>
                    <p>Let's start with an unsorted list:</p>
                    {numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                    <p>In the first pass, we're comparing the first two numbers in the list. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    <button onClick={() => {this.setState({correct: false})}}>6</button>
                    {this.state.correct === null ? "" : 
                    this.state.correct ? 
                    <p>That's right! In the first pass, 3 and 6 are compared but nothing changes as 3 is less than 6</p> : 
                    <p>That's not correct, try again.</p>
                    }
                </div>
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        )
    }

    step_two () {
        let numbers = [3, 6, 5, 8, 4];

        let right_num = 5;
        let left_num = 6;

        return (
            <div>
                <div>
                    <p>This process repeats until the first pass completes:</p>
                    {numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    <button onClick={() => {this.setState({correct: false})}}>6</button>
                    {this.state.correct === null ? "" : 
                    this.state.correct ? 
                    <p>That's right! In the first pass, 3 and 6 are compared but nothing changes as 3 is less than 6</p> : 
                    <p>That's not correct, try again.</p>
                    }
                </div>
                <div> 
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        )
    }

    chooseStep() {
        switch (this.state.step) {
            case 1:
                return this.step_one()
            case 2:
                return this.step_two()
            default:
                return this.step_one()
        }
    }

    nextStep() {
        this.setState({step: this.state.step + 1, correct: null})
    }

    render () {
        return (
            <div>
                {this.chooseStep()}
            </div>
        )
    }

    constructor () {
        super();
        this.state = {
            step: 1,
            correct: null,
        }
    }
}

export default BubbleSort;