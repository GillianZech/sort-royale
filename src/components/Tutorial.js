import React, {Component} from 'react';
import BubbleSort from './tutorials/BubbleSort';
import InsertionSort from './tutorials/InsertionSort';
import MergeSort from './tutorials/MergeSort';
import QuickSort from './tutorials/QuickSort';
import SelectSort from './tutorials/SelectSort';
import DuplicateTutorial from './tutorials/DuplicateTutorial';
import HowToPlay from './tutorials/HowToPlay';
import Tips from './tutorials/Tips';
import "./tutorials/tutorials.css";


class Tutorial extends Component {
    noTutorialChosen () {
        return (
            <div className='tutorial-selection-screen'>
                <h1 className='tutorial-selection-h1'>Tutorial</h1>
                <div className='fully-wide'>a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a</div>
                <h2 className='explore'>Explore a sorting algorithm...</h2>
                <ul>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "bubble sort"})}}>Level 1. Bubble Sort</button></li>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "select sort"})}}>Level 2. Select Sort</button></li>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "insertion sort"})}}>Level 3. Insertion Sort</button></li>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "merge sort"})}}>Level 4. Merge Sort</button></li>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "quick sort"})}}>Level 5. Quick Sort</button></li>
                </ul>
                <h2>...or take a look at these other helpful tutorials!</h2>
                <ul>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "howtoplay"})}}>How to Play</button></li>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "tips"})}}>Tips and Tricks</button></li>
                    <li><button className='tutorial-selection-screen-button' onClick={()=>{this.setState({chosen_tutorial: "duplicate"})}}>Advanced - Duplicate Sorting</button></li>
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
                return (<HowToPlay />)
            case "tips":
                return (<Tips />)
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
                {this.state.chosen_tutorial != null ? <button onClick={() => {this.setState({chosen_tutorial: null})}}>Return to tutorials</button> : null}
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