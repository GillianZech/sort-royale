import React, {Component} from 'react';

class BaseTutorial extends Component {
    steps = [];

    execute(step) {
        return step.info;
    }

    run() {
        for (let i = 0; i < this.steps.length(); i++) {
            let info = this.execute(this.steps[i]);

        }
    }

    BaseTutorial(steps) {
        this.steps = steps;
    }

    moveNumber(array, from, to) {
        let num = array[from];
        array.splice(from, 1);
        array.splice(to, 0, num);
    }

}

export default BaseTutorial;