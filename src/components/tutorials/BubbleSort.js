import React from 'react';
import BaseTutorial from './BaseTutorial.js';

class BubbleSort extends BaseTutorial {
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
                <div>
                    <p>Bubble sort is the simplest sorting algorithm as it compares two adjacent elements, and then changes position if one is greater than the other. This process repeats until the array is fully sorted.</p>
                    <p>Let's start with an unsorted list:</p>
                    {this.state.numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                    <p>In the first pass, we're comparing the first two numbers in the list. Which one is lower?</p>
                    <button onClick={() => {this.setState({correct: true})}}>3</button>
                    <button onClick={() => {this.setState({correct: false})}}>6</button>
                    {this.state.correct === null ? "" : 
                    this.state.correct ? 
                    <p>That's right! In the first pass, 3 and 6 are compared but nothing changes as 3 is less than 6</p> : 
                    <p>That's not correct, try again.</p>
                    }
                </div>
                <div>
                    <button onClick={() => {
                        this.nextStep()
                        this.setState({left_index: 0, right_index: 1, numbers: [3, 6, 5, 8, 4]})
                        }}>Next step</button>
                </div>
            </div>
        )
    }

    step_two () {
            return (
                <div>
                    <div>
                        <p>This process repeats until the first pass completes:</p>
                        {this.state.numbers.map((num, index) => {
                            return(<li key={index}>{num}</li>)
                        })}
                        {
                            this.state.right_index < 5 ? 
                            <div>
                                {/* The correct number is determined dynamically here */}
                                {/* If the person gets it right, the array will change and they will be shown the next ones to do */}
                                {/* Otherwise, nothing will change other than the "That's not correct" text being shown */}
                                <button onClick={() => {
                                    if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.right_index ) {
                                        this.setState({correct: false})
                                    } else {
                                        this.updateOrder(this.state.left_index, this.state.right_index)
                                        this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
                                    }
                                }}>
                                    {this.state.numbers[this.state.left_index]}
                                </button>
                                <button onClick={() => {
                                    if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.left_index ) {
                                        this.setState({correct: false})
                                    } else {
                                        this.updateOrder(this.state.left_index, this.state.right_index)
                                        this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
                                    }
                                }}>
                                    {this.state.numbers[this.state.right_index]}
                                </button>
                                {this.state.correct === null ? "" : 
                                this.state.correct ? 
                                <div>
            
                                </div> : 
                                <p>That's not correct, try again.</p>
                                }
                            </div> :
                            <div></div>
                        }
                       
                    </div>
                    <div> 
                        <button onClick={() => {
                            this.nextStep();
                            this.setState({left_index: 0, right_index: 1, correct: null, numbers: [3, 5, 6, 4, 8]})
                            }}>Next step</button>
                    </div>
                </div>
        )
    }

    step_three () {
        return (
            <div>
                <div>
                    <p>Now we do it again for the second pass:</p>
                    {this.state.numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                    {
                        this.state.right_index < 5 ? 
                        <div>
                            {/* The correct number is determined dynamically here */}
                            {/* If the person gets it right, the array will change and they will be shown the next ones to do */}
                            {/* Otherwise, nothing will change other than the "That's not correct" text being shown */}
                            <button onClick={() => {
                                if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.right_index ) {
                                    this.setState({correct: false})
                                } else {
                                    this.updateOrder(this.state.left_index, this.state.right_index)
                                    this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
                                }
                            }}>
                                {this.state.numbers[this.state.left_index]}
                            </button>
                            <button onClick={() => {
                                if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.left_index ) {
                                    this.setState({correct: false})
                                } else {
                                    this.updateOrder(this.state.left_index, this.state.right_index)
                                    this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
                                }
                            }}>
                                {this.state.numbers[this.state.right_index]}
                            </button>
                            {this.state.correct === null ? "" : 
                            this.state.correct ? 
                            <div>
        
                            </div> : 
                            <p>That's not correct, try again.</p>
                            }
                        </div> :
                        <div></div>
                    }
                   
                </div>
                <div> 
                    <button onClick={() => {
                        this.nextStep();
                        this.setState({left_index: 0, right_index: 1, correct: null, numbers: [3, 5, 4, 6, 8]})
                        }}>Next step</button>
                </div>
            </div>
        )
    }

    step_four () {
        return (
            <div>
                <div>
                    <p>And again for the third pass:</p>
                    {this.state.numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                    {
                        this.state.right_index < 5 ? 
                        <div>
                            {/* The correct number is determined dynamically here */}
                            {/* If the person gets it right, the array will change and they will be shown the next ones to do */}
                            {/* Otherwise, nothing will change other than the "That's not correct" text being shown */}
                            <button onClick={() => {
                                if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.right_index ) {
                                    this.setState({correct: false})
                                } else {
                                    this.updateOrder(this.state.left_index, this.state.right_index)
                                    this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
                                }
                            }}>
                                {this.state.numbers[this.state.left_index]}
                            </button>
                            <button onClick={() => {
                                if (this.getSmallerNumber(this.state.left_index, this.state.right_index) === this.state.left_index ) {
                                    this.setState({correct: false})
                                } else {
                                    this.updateOrder(this.state.left_index, this.state.right_index)
                                    this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1, correct: null})
                                }
                            }}>
                                {this.state.numbers[this.state.right_index]}
                            </button>
                            {this.state.correct === null ? "" : 
                            this.state.correct ? 
                            <div>
        
                            </div> : 
                            <p>That's not correct, try again.</p>
                            }
                        </div> :
                        <div></div>
                    }
                   
                </div>
                <div> 
                    <button onClick={() => {
                        this.nextStep();
                        this.setState({left_index: 0, right_index: 1, correct: null, numbers: [3, 4, 5, 6, 8]})
                        }}>Next step</button>
                </div>
            </div>
        )
    }

    step_five() {
        return (
            <div>
                <p>The list is finally sorted!</p>
                {this.state.numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                })}
                <p>Bubble sort is a great sorting algorithm for... but it has its drawbacks...</p>
                <button onClick={() => {this.setState({
                    left_index: 1,
                    right_index: 2,
                    step: 0,
                    correct: null,
                    numbers: [3, 6, 5, 8, 4]
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
            numbers: [3, 6, 5, 8, 4]
        }
        this.steps = [this.step_one, this.step_two, this.step_three, this.step_four, this.step_five];
    }
}

export default BubbleSort;