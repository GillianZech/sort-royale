import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';
import "./tutorials.css"
class QuickSort extends BaseTutorial {
    
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

    handleClick(event) {
        if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.left_index) {
            this.updateOrder(this.state.left_index, this.state.right_index)
            this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
        }
    }
    
    step_one () {
        return (
        <div>
                <p>Similar to Merge sort, Quick Sort "divides and conquers." It will pick the last element in an array as a pivot and will become the middle point. The numbers less than the pivot will be in an array in front of the pivot, and the numbers greater will behind it. This process repeats until all numbers are sorted.</p>
                <p>Let's start with an unsorted list:</p>
                <ul>
                    <li className = "bold">2</li>
                    <li>5</li>
                    <li>1</li>
                    <li>3</li>
                    <li className = "bold">4</li>
                </ul>
                <p>We will look at the first number in the array which is 2 and compare it to 4. Is it Less or Greater than 4?</p>
                <button onClick={() => {this.setState({correct: true})}}>Less</button>
                <button onClick={() => {this.setState({correct: false})}}>Greater</button>
                {this.state.correct === null ? "" : 
                    this.state.correct ? 
                <p>That's right! Since 2 is less than 4, it will join a subarray in front of 4.</p> : 
                <p>That's not correct, take a look at the numbers and try again.</p>
                }
        <button onClick={() => {this.nextStep()}}>Next Step</button>
        </div>
        )
    }
   
    step_two () {
        return (
        <div>
            <p> Let's look at the Original array.</p>
            <p>Less:</p>
            <ul>
                <li>2</li>
            </ul>
            <p className = "bold"> Pivot: </p>
            <ul>
                <li className = "bold">4</li>
            </ul>
            <p>Greater:</p>
            <p className = "bold">Original Array:</p>
            <ul>
                <li className = "bold">5</li>
                <li> 1</li>
                <li>3</li>
            </ul>
                <p>We will look at the first number in the Original array which is 5 and compare it to 4. Is it less than or greater than 4?</p>
                <button onClick={() => {this.setState({correct: false})}}>Less</button>
                <button onClick={() => {this.setState({correct: true})}}>Greater</button>
                {this.state.correct === null ? "" : 
                    this.state.correct ? 
                <p>That's right! Since 5 is greater than 4, it will join the greater array.</p> : 
                <p>That's not correct, take a look at the numbers and try again.</p>
                }
        <button onClick={() => {this.nextStep()}}>Next step</button>
        </div>
        )
    }

    step_three () {
        return (
        <div>
            <p> Let's look at the Original array.</p>
            <p>Less:</p>
            <ul>
                <li>2</li>
            </ul>
            <p className = "bold"> Pivot: </p>
            <ul>
                <li className = "bold">4</li>
            </ul>
            <p>Greater:</p>
            <ul>
                <li>5</li>
            </ul>
            <p className = "bold">Original Array:</p>
            <ul>
                <li className = "bold"> 1</li>
                <li>3</li>
            </ul>
                <p>We will look at the first number in the Original array which is 5 and compare it to 4. Is it less than or greater than 4?</p>
                <button onClick={() => {this.setState({correct: true})}}>Less</button>
                <button onClick={() => {this.setState({correct: false})}}>Greater</button>
                {this.state.correct === null ? "" : 
                    this.state.correct ? 
                <p>That's right! Since 1 is less than 4, it will join the less array.</p> : 
                <p>That's not correct, take a look at the numbers and try again.</p>
                }
        <button onClick={() => {this.nextStep()}}>Next step</button>
        </div>
        )
    }

    step_four () {
        return (
        <div>
            <p> Let's look at the Original array.</p>
            <p>Less:</p>
            <ul>
                <li>2</li>
                <li> 1</li>
            </ul>
            <p className = "bold"> Pivot: </p>
            <ul>
                <li className = "bold">4</li>
            </ul>
            <p>Greater:</p>
            <ul>
                <li>5</li>
            </ul>
            <p className = "bold">Original Array:</p>
            <ul>
                <li>3</li>
            </ul>
                <p>We will look at the first number in the Original array which is 5 and compare it to 4. Is it less than or greater than 4?</p>
                <button onClick={() => {this.setState({correct: true})}}>Less</button>
                <button onClick={() => {this.setState({correct: false})}}>Greater</button>
                {this.state.correct === null ? "" : 
                    this.state.correct ? 
                <p>That's right! Since 1 is less than 4, it will join the less array.</p> : 
                <p>That's not correct, take a look at the numbers and try again.</p>
                }
        <button onClick={() => {this.nextStep()}}>Next step</button>
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
            numbers: [2, 5, 1, 3, 4]
        }
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four, this.step_five, this.step_six, this.step_seven, this.step_eight, this.step_nine, this.step_ten, this.step_eleven];

    }

}

export default QuickSort;  