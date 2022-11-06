import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';
import "./tutorials.css"

class InsertionSort extends BaseTutorial {
    
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
                <p>Insertion Sort is a simple sorting algorithm that takes an unsorted array and makes a sorted subarray which compares numbers that are next to each other. Numbers in the unsorted array are sorted until they're in the correct spot, and then they're locked into the sorted subarray.</p>
                <p>Let's start with an unsorted list:</p>
                <p>Main Array:</p>
                <ul>
                    <li>5</li>
                    <li>4</li>
                    <li>3</li>
                    <li>1</li>
                    <li>2</li>
                </ul>
                <p>To start, we compare the first two numbers in the list. Which one is lower?</p>
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
                    <p>Subarray (bold):</p>
                    <ul>
                        <li  className = "bold">4</li>
                        <li>5</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>Next, we will compare 5 and 3 in the main array. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 3 is less than 5 so their positions are swapped, and 3 is put into the subarray.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
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
                    <p>Subarray (bold):</p>
                    <ul>
                        <li className = "bold">4</li>
                        <li className = "bold">3</li>
                        <li>5</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>We will compare 4 and 3 as they haven't been compared yet. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>4</button>
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 3 is less than 4, so it moves in front of the subarray.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_four () {
        return (
            <div>
                <div>
                    <p>Subarray (bold):</p>
                    <ul>
                        <li className = "bold">3</li>
                        <li className = "bold">4</li>
                        <li>5</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>Since there isn't anything else to compare 3 to, we go back to where we left off at 5 and then compare the next number that hasn't been compared yet. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    <button onClick={() => {this.setState({correct: true})}}>1</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 1 is less than 5, so it moves in front of 5 and into the subarray.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_five () {
        return (
            <div>
                <div>
                    <p>Subarray (bold):</p>
                    <ul>
                        <li className = "bold">3</li>
                        <li className = "bold">4</li>
                        <li className = "bold">1</li>
                        <li>5</li>
                        <li>2</li>
                    </ul>
                    <p>We will compare 4 and 1 as they haven't been compared yet. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>4</button>
                    <button onClick={() => {this.setState({correct: true})}}>1</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 1 is less than 4, so it moves in front of 4.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_six () {
        return (
            <div>
                <div>
                    <p>Subarray (bold):</p>
                    <ul>
                        <li className = "bold">3</li>
                        <li className = "bold">1</li>
                        <li>4</li>
                        <li>5</li>
                        <li>2</li>
                    </ul>
                    <p>We will compare 3 and 1 as they haven't been compared yet. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>3</button>
                    <button onClick={() => {this.setState({correct: true})}}>1</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 1 is less than 3, so it moves in front of 3.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }
    step_seven () {
        return (
            <div>
                <div>
                    <p>Subarray (bold):</p>
                    <ul>
                        <li className = "bold">1</li>
                        <li className = "bold">3</li>
                        <li className = "bold">4</li>
                        <li>5</li>
                        <li>2</li>
                    </ul>
                    <p>Since there isn't anything else to compare 1 to, we go back to where we left off at which was 5 and then compare the next number that hasn't been compared yet which is 2. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>5</button>
                    <button onClick={() => {this.setState({correct: true})}}>2</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 2 is less than 5, so it moves in front of 5 and into the subarray.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_eight () {
        return (
            <div>
                <div>
                    <p>Subarray (bold):</p>
                    <ul>
                        <li className = "bold">1</li>
                        <li className = "bold">3</li>
                        <li className = "bold">4</li>
                        <li className = "bold">2</li>
                        <li>5</li>
                    </ul>
                    <p>We will compare 4 and 2 as they haven't been compared yet. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: false})}}>4</button>
                    <button onClick={() => {this.setState({correct: true})}}>2</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 2 is less than 4, so it moves in front of 4.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_nine () {
        return (
            <div>
                <div>
                    <p>Subarray:</p>
                    <ul>
                        <li className = "bold">1</li>
                        <li className = "bold">3</li>
                        <li className = "bold">2</li>
                        <li className = "bold">4</li>
                        <li>5</li>
                    </ul>
                    <p>We will compare 3 and 2 as they haven't been compared yet. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: true})}}>2</button>
                    <button onClick={() => {this.setState({correct: false})}}>3</button>
                    {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 2 is less than 3, so it moves in front of 3.</p> : 
                    <p>That's not correct, take a look at the numbers and try again.</p>
                    }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        </div>
        )
    }

    step_ten() {
        return (
            <div>
                <p>The list is finally sorted!</p>
                <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                <p>Insertion sort is a great intermediate algorithm for heavier duty sorting with longer lists while still maintaining the simplicity of being recursionless, but it has its drawbacks in that the creation and manipulation of the subarray can take up extra space in memory and it still takes several comparisons in long lists to completely sort the array.</p>
                <button onClick={() => {this.setState({
                    left_index: 1,
                    right_index: 2,
                    step: 0,
                    correct: null,
                    numbers: [5, 4, 3, 1, 2]
                })}}>Restart tutorial</button>
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
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four, this.step_five, this.step_six, this.step_seven, this.step_eight, this.step_nine, this.step_ten];

    }
}

export default InsertionSort;