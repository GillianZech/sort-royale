import React, {Component} from 'react';

class BubbleGame extends Component {
    constructor (props) {
        super();
        let numbers = props.numbers

        this.state = {
            numbers: numbers,
            left_index: 0,
            right_index: 1,
            incorrect: false,
            allow_next: true,
            complete: false,
        }
        this.myDiv = React.createRef();
    }

    componentDidMount() {
        this.myDiv.current.addEventListener('keydown', this.handleKey);
        this.myDiv.current.focus();
    }

    componentWillUnmount() {
        this.myDiv.current.removeEventListener('keydown', this.handleKey);
    }

    handleKey = (e) => {
        this.setState({incorrect: false})
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            if (this.state.allow_next) {
                if (this.check_answer("left")) {
                    // Left is smaller, go to next numbers
                    this.getNextNumbers();
                } else {
                    // Player was wrong, mark incorrect
                    this.setState({incorrect: true})
                }
                this.setState({allow_next: false})
            } else{
                this.setState({allow_next: true})
            }
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            if (this.state.allow_next) {
            if (this.check_answer("right")) {
                // Right is smaller, switch numbers and go next
                this.moveNumber(this.state.right_index, this.state.left_index);
                this.getNextNumbers();
            } else {
                // Player was wrong, mark incorrect
                this.setState({incorrect: true})
            }
            this.setState({allow_next: false})
        } else {this.setState({allow_next: true})}
        }
    }

    checkIsSorted() {
        let numbers = this.state.numbers;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i+1] < numbers[i]) {
                return false;
            }
        } 
        return true;
    }

    getNextNumbers() {
        this.setState({complete: this.checkIsSorted()});
        this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1});
        if (this.state.right_index === this.state.numbers.length - 1) {
            this.setState({left_index: 0, right_index: 1})
        }
    }
    
    moveNumber(from, to) {
        let numbers = [...this.state.numbers]
        let num = numbers[from];
        numbers.splice(from, 1);
        numbers.splice(to, 0, num);
        this.setState({numbers: numbers});
    }

    check_answer(direction) {
        if (direction === "left") {
            return (this.state.numbers[this.state.left_index] <= this.state.numbers[this.state.right_index]);
        } else if (direction === "right") {
            return (this.state.numbers[this.state.right_index] <= this.state.numbers[this.state.left_index]);
        }
    }

    render() {
        if (!this.state.complete) {
            return (
                <div>
                    <div className="numbers">
                        {this.state.numbers.map((num, index) => {
                            return(<li key={index}>{num}</li>)
                        })}
                    </div>
                    <div tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
                        <div><p>Which number is smaller?</p></div>
                        <p>{this.state.numbers[this.state.left_index]}</p>
                        <p>{this.state.numbers[this.state.right_index]}</p>
                        {this.state.incorrect ? <p>❌</p> : null}
                    </div>
                </div>
            )
        } else {
            return (
            <div>
                <p>You win!</p>
            </div>
            );
        }

    }
}

export default BubbleGame;