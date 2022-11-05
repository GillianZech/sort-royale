import React, {Component} from 'react';
import BubbleSort from './tutorials/BubbleSort';
import InsertionSort from './tutorials/InsertionSort';
import MergeSort from './tutorials/MergeSort';
import QuickSort from './tutorials/QuickSort';
import SelectSort from './tutorials/SelectSort';

class Tutorial extends Component {
    noTutorialChosen () {
        return (
            <div>
                <p>Welcome to the tutorial!</p>
                <p>Choose a sorting algorithm to look at:</p>
                <ul>
                    <li><button>Bubble Sort</button></li>
                    <li><button>Insertion Sort</button></li>
                    <li><button>Merge Sort</button></li>
                    <li><button>Quick Sort</button></li>
                    <li><button>Select Sort</button></li>
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
            case "bubble":
                return <BubbleSort />
            case "insertion":
                return <InsertionSort />
            case "merge":
                return <MergeSort />
            case "quick":
                return <QuickSort />
            case "select":
                return <SelectSort />
            case "howtoplay":
                return <MergeSort />
            case "tips":
                return <MergeSort />
            case "duplicate":
                return < />
            default:
                return null
        }
    }

    render () {
        return (
            <div>
                {this.state.chosen_tutorial === null ? this.noTutorialChosen() : this.chooseTutorial()}
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