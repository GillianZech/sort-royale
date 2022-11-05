import React, {Component} from 'react';

class DuplicateTutorial extends Component {
    first () {
        return (
            <div>
                <p>Say there’s an array with the following numbers: 1, 3, 2, 4, 2</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li>2</li>
                    <li>4</li>
                    <li>2</li>
                </ul>
                <p>There are five numbers in this array, but two of them are duplicates. How does each sorting method handle this? Let's start with bubble sort.</p>
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
        let startingNumbers = [1, 3, 2, 4, 2];
    }
}

export default DuplicateTutorial;