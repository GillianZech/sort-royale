import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';
import "./tutorials.css"

class InsertionSort extends BaseTutorial {
    step_one () {
        return (
            <div>
                <p>Insertion Sort is a simple sorting algorithm that has a sorted array and unsorted array which compares numbers that are next to each other. They are sorted until they're in the correct spot.</p>
                <p>Let's start with an unsorted list:</p>
                <ul>
                    <li className = "bold">5</li>
                    <li className = "bold">4</li>
                    <li>3</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
                <p>In the first pass, we compare the first two numbers in the list. Which one is lower?</p>
                <button onClick={() => {this.setState({correct: false})}}>5</button>
                <button onClick={() => {this.setState({correct: true})}}>4</button>
                {this.state.correct === null ? "" : 
                    this.state.correct ? 
                <p>That's right! In the first pass, 4 and 5 are compared, and 4 is lower, so their positions are swapped in the subarray. We then store 4 in a subarray.</p> : 
                <p>That's not correct, take a look at the numbers and try again.</p>
                }
        <button onClick={() => {this.nextStep()}}>Next step</button>
        </div>
        )
    }
   
    step_two () {
        return (
            <div>
                <div>
                    <p>This process repeats until the second to last element is compared with the final element.</p>
                    <p>Main Array:</p>
                    <ul>
                        <li>4</li>
                        <li className = "bold">3</li>
                        <li className = "bold">5</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>Subarray:</p>
                    <ul>
                        <li>4</li>
                        <li>5</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>In the second pass, we will compare 3 and 5 in the main array. Is 3 or 5 lower?</p>
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! In the second pass, 3 is less than 5 so their positions are swapped in the subarray.</p> : 
                    <p>That's not correct, there's a lower value in the list.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_three () {
        return (
            <div>
                <div>
                    <p>Now, we will look at the subarray.</p>
                    <p>Main Array:</p>
                    <ul>
                        <li>4</li>
                        <li className = "bold">3</li>
                        <li className = "bold">5</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>Subarray:</p>
                    <ul>
                        <li>4</li>
                        <li>5</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>In the second pass, we will compare 3 and 5 in the main array. Is 3 or 5 lower?</p>
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! In the second pass, 3 is less than 5 so their positions are swapped in the subarray.</p> : 
                    <p>That's not correct, there's a lower value in the list.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
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
            numbers: [5, 4, 3, 1, 2]
        }
        this.steps = [this.step_one, this.step_two, this.step_three];

    }
}

export default InsertionSort;