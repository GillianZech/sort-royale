import React, {Component} from 'react';

class InsertionSort extends Component {
    first () {
        return (
            <div>
                <p>Insertion Sort is a simple sorting algorithm that takes a single element and checks it against everything before it until it finds a number smaller than it.</p>
                <p>Let's start with an unsorted list:</p>
                <ul>
                    <li>5</li>
                    <li>4</li>
                    <li>3</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
                <p>In the first pass, we compare the first two numbers in the list. Which one is lower?</p>
                <button onClick={() => {this.setState({correct: true})}}>4</button>
                <button onClick={() => {this.setState({correct: false})}}>5</button>
                {this.state.correct ? 
                <p>That's right! In the first pass, 4 and 5 are compared, and 4 is lower, so their positions are swapped.</p> : 
                <p>That's not correct, take a look at the numbers and try again.</p>
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
        let startingNumbers = [5, 4, 1, 3, 2];
    }
}

export default InsertionSort;