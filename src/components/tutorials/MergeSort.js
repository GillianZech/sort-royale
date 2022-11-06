import React, {Component} from 'react';
import BaseTutorial from './BaseTutorial.js';
import './tutorials.css'

class MergeSort extends BaseTutorial {
    step_one () {
        return (
            <div>
                <h2>Merge Sort:</h2>
                <p>Merge sort is a recursive algorithm that breaks a list down into progressively smaller chunks until it can make single comparisons between elements.</p>
                <p>Let's start with an unsorted list:</p>
                <ul className='tutorial-ul'>
                    <li>6</li>
                    <li>1</li>
                    <li>7</li>
                    <li>5</li>
                    <li>2</li>
                </ul>
                <p>In the first step, check whether or not the left index "l" of the array is less than the right index "r". In other words, are they different indexes? </p>
                
                <p>If so, calculate the midpoint using the formula m = (r - 1) / 2. Always round decimals down, or use integer division. Where is the midpoint?</p>
                <button onClick={() => {this.setState({correct: true})}}>After 7</button>
                <button onClick={() => {this.setState({correct: false})}}>After 1</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! If there's an odd number of elements, the first half of the list will always have one more element than the second half.</p> : 
                <p>That's not correct, recalculate the midpoint and try again.</p>
                }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        )
    }
    step_two () {
        return (
            <div>
                <p>In the next step, we look at the split arrays separately, using the same process we did for the first list.</p>
                <p>Let's start with the left list:</p>
                <ul className='tutorial-ul'>
                    <li>6</li>
                    <li>1</li>
                    <li>7</li>
                </ul>
                <p>The left and right indexes still are not the same, so we calculate the midpoint using the formula m = (r - 1) / 2. Where is the midpoint?</p>
                <button onClick={() => {this.setState({correct: false})}}>After 6</button>
                <button onClick={() => {this.setState({correct: true})}}>After 1</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! If there's an odd number of elements, the first half of the list will always have one more element than the second half.</p> : 
                <p>That's not correct, recalculate the midpoint and try again.</p>
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
                <p>Next, let's look at the right list:</p>
                <ul className='tutorial-ul'>
                    <li>5</li>
                    <li>2</li>
                </ul>
                <p>The left and right indexes still are not the same, so we calculate the midpoint using the formula m = (r - 1) / 2. Where is the midpoint?</p>
                <button onClick={() => {this.setState({correct: true})}}>After 5</button>
                <button onClick={() => {this.setState({correct: false})}}>After 2</button>
                {this.state.correct===null ? "" :
                this.state.correct ? 
                <p>That's right! Even lists get split evenly.</p> : 
                <p>That's not correct, recalculate the midpoint and try again.</p>
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
                <p>The leftmost array is the last with more than one element.</p>

                <ul className='tutorial-ul'>
                    <li>6</li>
                    <li>1</li>
                </ul>
                <p>Where is the midpoint?</p>
                <button onClick={() => {this.setState({correct: false})}}>Before 6</button>
                <button onClick={() => {this.setState({correct: true})}}>After 6</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right!</p> : 
                <p>That's not correct, recalculate the midpoint and try again.</p>
                }
                <div>
                    <button onClick={() => {this.nextStep()}}>Next step</button>
                </div>
            </div>
        );
    }
            
    step_five () {
        return (
            <div>
                <p>The merging process compares the same arrays in each step, but in reverse order. We merge these subarrays now, instead of splitting them.</p>
                <ul className='tutorial-ul'>
                    <li>6</li>
                    <li>1</li>
                </ul>
                <p>Our splitting process has made it so that all our subarrays are sorted (for now, because they have one element each). Using this, we can compare the arrays and decide: which first element is smaller?</p>
                <button onClick={() => {this.setState({correct: false})}}>6</button>
                <button onClick={() => {this.setState({correct: true})}}>1</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! Now, we combine the subarrays into [1, 6].</p> : 
                <p>That's not correct, try again.</p>
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
                <p>Now we will address merging arrays with multiple elements.</p>
                <ul className='tutorial-ul'>
                    <li>1</li>
                    <li>6</li>
                </ul>
                <p>We combine this with the following subarray:</p>
                <ul className='tutorial-ul'>
                    <li>7</li>
                </ul>
                <p>These subarrays are sorted. Using this, we can compare the arrays and decide: which first element of each subarray is smaller?</p>
                <button onClick={() => {this.setState({correct: true})}}>1</button>
                <button onClick={() => {this.setState({correct: false})}}>7</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! We use this information to place the first element 1 in the output array.</p> : 
                <p>That's not correct, try again.</p>
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
                <p>To finish the previous merge operation, we move on to the next element in the array we took the element from.</p>
                <ul className='tutorial-ul'>
                    <li>1</li>
                    <li>6</li>
                </ul>
                <p>That second element, 6, is compared with the first element of the next array:</p>
                <ul className='tutorial-ul'>
                    <li>7</li>
                </ul>
                <p>Which element is smaller?</p>
                <button onClick={() => {this.setState({correct: true})}}>6</button>
                <button onClick={() => {this.setState({correct: false})}}>7</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! We use this information to place the second element 6 in the output array. Now that the first array is empty, we can add the rest of the second array to the output array. With this, our output array is finished: [1, 6, 7].</p> : 
                <p>That's not correct, try again.</p>
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
                <ul className='tutorial-ul'>
                    <li>5</li>
                </ul>
                <p>This array will now be combined with the following array:</p>
                <ul className='tutorial-ul'>
                    <li>2</li>
                </ul>
                <p>We are back to atomic arrays. Which first element of each subarray is smaller?</p>
                <button onClick={() => {this.setState({correct: false})}}>5</button>
                <button onClick={() => {this.setState({correct: true})}}>2</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! We switch the subarrays, so the output array is [2, 5].</p> : 
                <p>That's not correct, try again.</p>
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
                <p>The final challenge of this tutorial is merging the following (relatively) large arrays, respectively.</p>
                <ul className='tutorial-ul'>
                    <li>1</li>
                    <li>6</li>
                    <li>7</li>
                </ul>
                <p>The second array:</p>
                <ul className='tutorial-ul'>
                    <li>2</li>
                    <li>5</li>
                </ul>
                <p>We begin the same way: which first element of each subarray is smaller?</p>
                <button onClick={() => {this.setState({correct: true})}}>1</button>
                <button onClick={() => {this.setState({correct: false})}}>2</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! We use this information to place the first element 1 in the output array.</p> : 
                <p>That's not correct, try again.</p>
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
                <p>We look at the next element from the array we just took from.</p>
                <ul className='tutorial-ul'>
                    <li>1</li>
                    <li className="bold">6</li>
                    <li>7</li>
                </ul>
                <p>The second array:</p>
                <ul className='tutorial-ul'>
                    <li>2</li>
                    <li>5</li>
                </ul>
                <p>We continue: which element of each subarray is smaller?</p>
                <button onClick={() => {this.setState({correct: false})}}>6</button>
                <button onClick={() => {this.setState({correct: true})}}>2</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! We use this information to place the second element 2 in the output array.</p> : 
                <p>That's not correct, try again.</p>
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
                <p>We continue this process again, now reviewing the second element of the second array, since 2 has already been evaluated.</p>
                <ul className='tutorial-ul'>
                    <li>1</li>
                    <li className="bold">6</li>
                    <li>7</li>
                </ul>
                <p>The second array:</p>
                <ul className='tutorial-ul'>
                    <li>2</li>
                    <li className="bold">5</li>
                </ul>
                <p>We begin the same way: which element of each subarray is smaller?</p>
                <button onClick={() => {this.setState({correct: false})}}>6</button>
                <button onClick={() => {this.setState({correct: true})}}>5</button>
                {this.state.correct===null ? "" :
                this.state.correct ?
                <p>That's right! We use this information to place the third element 5 in the output array.</p> : 
                <p>That's not correct, try again.</p>
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
                <p>Since the second array has been completely sorted, we can now add the rest of the first array to the end of the sorted array, and the sort is complete!.</p>
                {this.setState({numbers: [1, 2, 3, 5, 6]})}
                {this.state.numbers.map((num, index) => {return(<li key={index}>{num}</li>)})}
                <p>Merge sort is great for larger arrays, because it breaks them down into more manageable chunks. However, making all of the subarrays required for merge sort takes up lots of memory, and it's a more complicated sorting algorithm to implement.</p>
                <button onClick={() => {this.setState({
                    left_index: 1,
                    right_index: 2,
                    step: 0,
                    left_correct: null,
                    right_correct: null,
                    numbers: [3, 1, 6, 5, 2]
                })}}>Restart tutorial</button>
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
            left_correct: null,
            right_correct: null,
            correct: null,
            numbers: [3, 1, 6, 5, 2]
        }
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four, this.step_five, this.step_six, this.step_seven, this.step_eight, this.step_nine, this.step_ten, this.step_eleven, this.step_twelve];
    }
}

export default MergeSort;