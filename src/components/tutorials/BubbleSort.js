import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';

class BubbleSort extends BaseTutorial {
    getSmallerNumber(index1, index2) {
        let num1 = this.state.numbers[index1]
        let num2 = this.state.numbers[index2]
        if (num1 < num2) {
            return index1
        } else {
            return index2
        }
    }

    updateOrder(left_index, right_index) {
        if (this.getSmallerNumber(left_index, right_index) === right_index) {
            this.moveNumber(this.state.numbers, right_index, left_index)
        }
    }

    step_one () {
        return (
            <div>
                <div>
                    <p>Bubble sort is the simplest sorting algorithm as it compares two adjacent elements, and then changes position if one is greater than the other. This process repeats until the array is fully sorted.</p>
                    <p>Let's start with an unsorted list:</p>
                    {this.state.numbers.map((num, index) => {
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
        return (
            <div>
                <div>
                    <p>This process repeats until the first pass completes:</p>
                    {this.state.numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}

                    {/* The correct number is determined dynamically here */}
                    {/* If the person gets it right, the array will change and they will be shown the next ones to do */}
                    {/* Otherwise, nothing will change other than the "That's not correct" text being shown */}
                    <button onClick={() => {this.setState({correct: this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.left_index})}}>
                        {this.state.numbers[this.state.left_index]}
                    </button>
                    <button onClick={() => {this.setState({correct: this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.right_index})}}>
                        {this.state.numbers[this.state.right_index]}
                    </button>
                    {this.state.correct === null ? "" : 
                    this.state.correct ? 
                    <div>
                        {/* When the correct answer is shown, update the array */}
                        {this.updateOrder(this.state.left_index, this.state.right_index)}
                        {this.state.left_index += 1}
                        {this.state.right_index += 1}
                        {/* {this.setState({correct: null})} */}
                    </div> : 
                    <p>That's not correct, try again.</p>
                    }
                </div>
                <div> 
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        )
    }


    render () {
        console.log(this.state)
        return (
            <div>
                {this.steps[this.state.step].call(this)}
            </div>
        )
    }

    constructor () {
        super();
        this.state = {
            left_index: 1,
            right_index: 2,
            step: 0,
            correct: null,
            numbers: [3, 6, 5, 8, 4]
        }
        this.steps = [this.step_one, this.step_two];
    }
}

export default BubbleSort;