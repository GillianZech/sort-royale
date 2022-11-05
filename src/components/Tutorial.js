import React, {Component} from 'react';
import BubbleSort from './tutorials/BubbleSort';
import InsertionSort from './tutorials/InsertionSort';
import MergeSort from './tutorials/MergeSort';
import QuickSort from './tutorials/QuickSort';
import SelectSort from './tutorials/SelectSort';
import DuplicateTutorial from './tutorials/DuplicateTutorial';

class Tutorial extends Component {
    noTutorialChosen () {
        return (
            <div>
                <p>Welcome to the tutorial!</p>
                <p>Choose a sorting algorithm to look at:</p>
                <ul>
                    <li><button onClick={()=>{this.setState({chosen_tutorial: "bubble sort"})}}>Level 1. Bubble Sort</button></li>
                    <li><button onClick={()=>{this.setState({chosen_tutorial: "select sort"})}}>Level 2. Select Sort</button></li>
                    <li><button onClick={()=>{this.setState({chosen_tutorial: "insertion sort"})}}>Level 3. Insertion Sort</button></li>
                    <li><button onClick={()=>{this.setState({chosen_tutorial: "merge sort"})}}>Level 4. Merge Sort</button></li>
                    <li><button onClick={()=>{this.setState({chosen_tutorial: "quick sort"})}}>Level 5. Quick Sort</button></li>
                </ul>
                <p>Or, take a look at these other helpful tutorials:</p>
                <ul>
                    <li><button>How to Play</button></li>
                    <li><button>Tips and Tricks</button></li>
                    <li><button>Advanced - Duplicate Sorting</button></li>
                </ul>
            </div>
        )
    }

    chooseTutorial (tutorial) {
        switch(tutorial) {
            case "bubble sort":
                return (<BubbleSort />)
            case "insertion sort":
                return (<InsertionSort />)
            case "merge sort":
                return (<MergeSort />)
            case "quick sort":
                return (<QuickSort />)
            case "select sort":
                return (<SelectSort />)
            case "howtoplay":
                return (<MergeSort />)
            case "tips":
                return (<MergeSort />)
            case "duplicate":
                return (<DuplicateTutorial />)
            default:
                return null
        }
    }

    render () {
        return (
            <div>
                {this.state.chosen_tutorial === null ? this.noTutorialChosen() : this.chooseTutorial(this.state.chosen_tutorial)}
            </div>
        )
    }

    constructor () {
        super();

        this.state = {
            chosen_tutorial: null,
        }
    }
}

export default Tutorial;