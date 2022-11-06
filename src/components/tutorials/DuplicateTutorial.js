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
                    <li style={{color:"#1af0e9"}}>2</li>
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
                    <li style={{color:"#1af0e9"}}>2</li>
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
                    <li style={{color:"#1af0e9"}}>2</li>
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
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
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
                    <li style={{color:"#1af0e9"}}>2</li>
                </ul>
                <p>We already know that 1 is in the correct spot, but 3 isn't. According to how selection sort works, which two will the three swap with?</p>
                <button onClick={() => {this.setState({correct: true})}}>Red two</button>
                <button onClick={() => {this.setState({correct: false})}}>Blue two</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Two isn't less than two, so the algorithm will register the red two as the smallest value in the array since it came first.</p> : 
                    <p>Not quite! Consider how a number is determined to be the "smallest"</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_five () {
        return (
            <div>
                <p>Good job! This list is already almost sorted all the way.</p>
                <ul>
                    <li>1</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li style={{color:"#1af0e9"}}>2</li>
                </ul>
                <p>According to what you know about selection sort, which number(s) will swap with the blue two?</p>
                <button onClick={() => {this.setState({correct: true})}}>3</button>
                <button onClick={() => {this.setState({correct: false})}}>4</button>
                <button onClick={() => {this.setState({correct: false})}}>3 and 4</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! 3 will swap with the blue 2 because it's the next variable in the array, and the blue two won't be touched again.</p> : 
                    <p>Almost! Consider the step-by-step process of evaluating a selection sort.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_six () {
        return (
            <div>
                <p>Now, let's try insertion sort!</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                    <li style={{color:"#1af0e9"}}>2</li>
                </ul>
                <p>Based on what you remember about insertion sort, which two will end up in its correct location first?</p>
                <button onClick={() => {this.setState({correct: true})}}>Red two</button>
                <button onClick={() => {this.setState({correct: false})}}>Blue two</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Because insertion compares from left to right initially, the red two will be sorted first.</p> : 
                    <p>Try again, and review how insertion sort works.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_seven () {
        return (
            <div>
                <p>Now, we continue to sort the list. We already know that the blue two will be less than three and four, but will it end up in front of the red two?</p>
                <ul>
                    <li>1</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li style={{color:"#1af0e9"}}>2</li>
                </ul>
                <p>Will the blue two end up in index 1 or 2 once the array is fully sorted?</p>
                <button onClick={() => {this.setState({correct: false})}}>1</button>
                <button onClick={() => {this.setState({correct: true})}}>2</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>Correct! For the same reason as selection sort, two isn't less than two, so the blue two will end up in the third slot, or index 2, of the array.</p> : 
                    <p>Try again, and consider how indexes and comparisons might factor into this problem.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_eight () {
        return (
            <div>
                <p>Now let's get to the harder algorithms. How does merge sort act?</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                    <li style={{color:"#1af0e9"}}>2</li>
                </ul>
                <p>Based on the midpoint of this array, will the twos be in the same subarray or different subarrays?</p>
                <button onClick={() => {this.setState({correct: false})}}>Same</button>
                <button onClick={() => {this.setState({correct: true})}}>Different</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>You got it! The midpoint will split the array into one three-element subarray and one two-element subarray.</p> : 
                    <p>Try again, how does the number of items in an array change where the midpoint might be?</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_nine () {
        return (
            <div>
                <p>Now, the two arrays are split up. They'll be split up again and put back together, and we've done those steps for you. Now, we're adding the arrays back together.</p>
                <p>First array:</p>
                <ul>
                    <li>1</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>3</li>
                </ul>
                <p>Second array:</p>
                <ul>
                    <li style={{color:"#1af0e9"}}>2</li>
                    <li>4</li>
                </ul>
                <p>Assuming that the elements of the array are compared using a less than symbol such that if((element from the first array) &lt; (element from the second)) -&gt; add first element, which two will be placed first in the final array?</p>
                <button onClick={() => {this.setState({correct: false})}}>Red two</button>
                <button onClick={() => {this.setState({correct: true})}}>Blue two</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Since a normal merge sort only checks if the other array value is less than the current one, the blue two in the other array will be prioritized.</p> : 
                    <p>Try again, consider exactly how this merge sort is implemented, and how that might affect which two is put into the final array first.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_ten () {
        return (
            <div>
                <p>Finally, let's use quick sort! Keep in mind that the last element of our array, blue two, will be our pivot.</p>
                <ul>
                    <li>1</li>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                    <li style={{color:"#1af0e9"}}>2</li>
                </ul>
                <p>Since the pivot divides the arrays by elements less than it, will red two end up in the "less than" array, or the other array?</p>
                <button onClick={() => {this.setState({correct: false})}}>Less than</button>
                <button onClick={() => {this.setState({correct: true})}}>Other</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Since two isn't less than two, there's only one element, 1, in the less than array.</p> : 
                    <p>Try again, is two less than two?</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_eleven () {
        return (
            <div>
                <p>We've split up our subarrays based on our original pivot, blue two. Now, we have the following:</p>
                <p>Array 1:</p>
                <ul>
                    <li>1</li>
                </ul>
                <p>Array 2:</p>
                <ul>
                    <li>3</li>
                    <li style={{color:"#ed1e25"}}>2</li>
                    <li>4</li>
                </ul>
                <p>Will red two end up as a pivot for a subarray of array 2?</p>
                <button onClick={() => {this.setState({correct: true})}}>Yes</button>
                <button onClick={() => {this.setState({correct: false})}}>No</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>That's right! Four will be the next pivot, and red two will be the pivot of the subarray after that.</p> : 
                    <p>Try again, consider what will happen to the next subarray after this one.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_twelve () {
        return (
            <div>
                <p>Now, we skip to the end of the quick sort.</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <p>Which two should be first in the list given the original pivot and subarrays?</p>
                <button onClick={() => {this.setState({correct: false})}}>Red two</button>
                <button onClick={() => {this.setState({correct: true})}}>Blue two</button>
                {this.state.correct === null ? "" :
                    this.state.correct ? 
                    <p>Exactly! Since blue two was the original pivot, and there was only one element smaller than it, blue two was assigned to the index of 1, where it will remain no matter what happens to red two.</p> : 
                    <p>Nope! Just because red two came first doesn't mean that it'll be first in the final array.</p>
                    }
                    <div>
                        <button onClick={() => {this.nextStep()}}>Next step</button>
                    </div>
            </div>
        )
    }
    step_thirteen () {
        return (
            <div>
                <p>Congratulations! You've learned how duplicates are handled with all of the sorting algorithms used in this game. Now, you can try harder versions of the game with your friends!</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <p>Depending on the implementation of your sorting algorithms, certain algorithms handle duplicates better than others. If done correctly, merge sort and quick sort are the fastest at quickly comparing duplicates and putting them in their correct locations, while bubble, selection, and insertion sort tend to be slower.</p>
                <button onClick={() => {this.setState({
                    left_index: 1,
                    right_index: 2,
                    step: 0,
                    correct: null,
                    numbers: [1, 3, 2, 4, 2]
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
            numbers: [1, 3, 2, 4, 2]
        }
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four, this.step_five, this.step_six, this.step_seven, this.step_eight, this.step_nine, this.step_ten, this.step_eleven, this.step_twelve, this.step_thirteen];
    }
}

export default DuplicateTutorial;