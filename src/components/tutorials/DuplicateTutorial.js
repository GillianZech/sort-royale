import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';

class DuplicateTutorial extends BaseTutorial {
    step_one () {
        return (
            <div>
                <p>Say there’s an array with the following numbers: 1, 3, 2, 4, 2</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                    <li style={{color:"blue"}}>2</li>
                </ul>
                <p>There are five numbers in this array, but two of them are duplicates. How does each sorting method handle this? Let's start with bubble sort.</p>
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        )
    }
    step_two () {
        return (
            <div>
                <p>As we know, bubble sort will start by comparing the first two numbers, and continue to compare until the list is sorted.</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                    <li style={{color:"blue"}}>2</li>
                </ul>
                <p> What is the first comparison that will cause two numbers to swap?</p>
                <button onClick={() => {this.setState({correct: false})}}>1 vs 3</button>
                    <button onClick={() => {this.setState({correct: true})}}>3 vs 2</button>
                    <button onClick={() => {this.setState({correct: false})}}>2 vs 4</button>
                    <button onClick={() => {this.setState({correct: false})}}>4 vs 2</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Comparing 1 and 3 will keep the array as is because they're already in the correct order, but 3 is greater than 2, so the two numbers will swap positions.</p> : 
                    <p>Not quite! Consider where the first instance of numbers out of order occur.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_three () {
        return (
            <div>
                <p>Just like normal, the algorithm will also find that 2 is less than 4, and swap those two elements. We've done that for you already. We already know on the second pass that 3 and blue 2 will swap, but will there be a need for the red two and blue two to swap?</p>
                <ul>
                    <li>1</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>3</li>
                    <li style={{color:"blue"}}>2</li>
                    <li>4</li>
                </ul>
                <p>Which two will come first?</p>
                <button onClick={() => {this.setState({correct: false})}}>Blue two</button>
                    <button onClick={() => {this.setState({correct: true})}}>Red Two</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! The list is sorted as is, so there's no need to swap the order of the twos.</p> : 
                    <p>Not quite! Is two less than two?</p>
                    }
            </div>
        )
    }
    step_four () {
        return (
            <div>
                <p>Now let's try sorting using selection sort!</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                    <li style={{color:"blue"}}>2</li>
                </ul>
                <p> What is the first comparison that will cause two numbers to swap?</p>
                <button onClick={() => {this.setState({correct: false})}}>1 vs 3</button>
                    <button onClick={() => {this.setState({correct: true})}}>3 vs 2</button>
                    <button onClick={() => {this.setState({correct: false})}}>2 vs 4</button>
                    <button onClick={() => {this.setState({correct: false})}}>4 vs 2</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Comparing 1 and 3 will keep the array as is because they're already in the correct order, but 3 is greater than 2, so the two numbers will swap positions.</p> : 
                    <p>Not quite! Consider where the first instance of numbers out of order occur.</p>
                    }
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
        super();
        this.state = {
            left_index: 1,
            right_index: 2,
            step: 0,
            correct: null,
            numbers: [1, 3, 2, 4, 2]
        }
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four, this.step_five];
    }
}

export default DuplicateTutorial;