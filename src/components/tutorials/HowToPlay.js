import React from 'react';
import BaseTutorial from './BaseTutorial.js';

class HowToPlay extends BaseTutorial {

    step_one () {
        return (
            <div>
                <p className = "bold">How to Play:</p>
                <p> </p>
                <ul>
                    <li>At the beginning of the game, each user will be asked to choose a sorting algorithm. They will also be presented with a sorted list. Once the game begins, each user will use their chosen sorting algorithm to sort a copy of the original list shuffled. The fastest person to sort their list of numbers in the order of the sorted list wins!</li>
                </ul>
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
        this.steps = [this.step_one]
    }
}
export default HowToPlay;