import React from 'react';
import BaseTutorial from './BaseTutorial.js';

class Tips extends BaseTutorial {

    step_one () {
        return (
            <div>
                <p className = "bold">Here are some great Tips and Tricks to keep in mind!</p>
                <ul>
                    <li>Consider the number of elements in your array! For example, selection sort is super effective on smaller lists, but it’ll slow you down on larger ones compared to merge sort.</li>
                    <li>How many duplicates are in the array? Think about how each sorting method handles duplicates, and whether it’ll get tripped up! If you’re not sure, go through the Advanced duplicate tutorial.</li>
                    <li>How hard is each method to think about? Bubble sort is a lot easier to remember than quick sort, so take time to master more difficult algorithms!</li>
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
export default Tips;