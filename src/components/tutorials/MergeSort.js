import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';

class SelectSort extends BaseTutorial {
    first () {
        return (
            <div>
                <p>Merge sort is a recursive algorithm that breaks a list down into progressively smaller chunks until it can make single comparisons between elements.</p>
                <p>Let's start with an unsorted list:</p>
                <ul>
                    <li>3</li>
                    <li>4</li>
                    <li>1</li>
                    <li>6</li>
                    <li>5</li>
                    <li>2</li>
                    <li>7</li>
                </ul>
                <p>In the first step, check whether or not the left index of the array is greater than the right index (in other words, is the left index). If so, calculate the midpoint using the formula m= l+(r-1)/2. Where is the midpoint?</p>
                <button onClick={() => {this.setState({correct: true})}}>After 6</button>
                <button onClick={() => {this.setState({correct: false})}}>After 1</button>
                {this.state.correct ? 
                <p>That's right! If there's an odd number of elements, the first half of the list will always have one more element than the second half.</p> : 
                <p>That's not correct, recalculate the midpoint and try again.</p>
                }
            </div>
        )
    }
    render () {
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
            numbers: [5, 2, 9, 6, 3]
        }
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four];
    }
}

export default SelectSort;