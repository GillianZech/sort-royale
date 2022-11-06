import React from 'react';
import BaseTutorial from './BaseTutorial.js';

class HowToPlay extends BaseTutorial {

    step_one () {
        return (
            <div>
                <h1>How to Play:</h1>
                <h2>At the beginning of the game, each user will be asked to choose a sorting algorithm. They will also be presented with a sorted list. Once the game begins, each user will use their chosen sorting algorithm to sort a copy of the original list shuffled. The left player will use WASD, while Player 2 will use the arrow keys. The fastest person to sort their list of numbers in the order of the sorted list wins!</h2>
                <h2> </h2>
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