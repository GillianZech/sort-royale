import React, {Component} from 'react';

class BaseTutorial extends Component {
    steps = [];

    BaseTutorial(steps) {
        this.steps = steps;
    }

    moveNumber(array, from, to) {
        let num = array[from];
        array.splice(from, 1);
        array.splice(to, 0, num);
    }

    nextStep() {
        this.setState({step: this.state.step + 1, correct: null})
    }

    nextButton() { 
        return <button onClick={() => {this.nextStep()}}>Next step</button>;
    }
}

export default BaseTutorial;