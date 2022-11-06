import BaseTutorial from "./BaseTutorial";

class MultiplayerControls extends BaseTutorial {
    step_one () {
        return (
            <div>
                <p>There are currently two sorting algorithms available to choose from in multiplayer: Bubble Sort and Select Sort.</p>
                <p>To play against someone else, you both need to pick one of the two based on the list of numbers generated.</p>
                <h1><b>Bubble Sort</b></h1>
                <p>Bubble sort is very easy to use in multiplayer, at the cost of increased array interactions. You will be shown two numbers that are next to each other in the array, and must determine which one is smaller and should go first.</p>
                <p>If you're playing on the left side, use the 'a' and 'd' keys to choose the lower number. 'a' represents the left number, and 'd' represents the right number.</p>
                <p>The player on the right side will use the arrow keys. Left and right arrow keys correspond to the left and right number, respectively.</p>
                <h1><b>Select Sort</b></h1>
                <p>To use select sort, you will be shown a number and will have to determine whether it is the lowest remaining (unsorted) number in the list.</p>
                <p>If you've alread sorted a lower number into an earlier spot in the list, you don't need to consider it.</p>
                <p>You will be shown each remaining unsorted number, and will decide whether it is or isn't the lowest remaining number.</p>
                <p>The left player will use the 'w' key to indicate that the displayed number is the lowest, and the 'd' key to indicate that it is not.</p>
                <p>The right player will use the up arrow key to indicate that the number is the lowest remaining, and the down arrow key for the opposite.</p>
                <br></br>
                <p>Both players will play at the same time, and will have the same list of numbers to sort. Whoever finishes theirs faster wins! You will also be shown the number of mistakes you made, so you may want to consider that as an additional challenge to boost the competition.</p>
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
            correct: null,
            numbers: [5, 4, 3, 1, 2]
        }
        this.steps = [this.step_one];
    }
}

export default MultiplayerControls;