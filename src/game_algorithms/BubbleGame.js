import React, {Component} from 'react';

class BubbleGame extends Component {
    constructor (props) {
        super();
        let numbers = props.numbers

        this.state = {
            numbers: numbers,
            left_index: 0,
            right_index: 1,
            pressed_right: false,
            pressed_left: false,
            incorrect: false,
            nums: [numbers[0], numbers[1]],
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
            this.setState({pressed_left: true})
            if (this.check_answer("left")) {
                // Left is smaller, go to next numbers
                this.getNextNumbers();
            } else {
                // Player was wrong, mark incorrect
                this.setState({incorrect: true})
            }
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            this.setState({pressed_right: true})
            if (this.check_answer("right")) {
                // Right is smaller, switch numbers and go next
                this.moveNumber(this.state.right_index, this.state.left_index);
                this.getNextNumbers();
            } else {
                // Player was wrong, mark incorrect
                this.setState({incorrect: true})
            }
        }
    }

    checkIsSorted() {
        let numbers = this.numbers;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i+1] < numbers[i]) {
                return false;
            }
        } 
        return true;
    }

    getNextNumbers() {
        this.setState({left_index: this.state.left_index + 1, right_index: this.state.right_index + 1})
        if (this.state.right_index > this.state.numbers.length) {
            this.setState({left_index: 0, right_index: 1})
        }
        let nums = [this.state.numbers[this.state.left_index], this.state.numbers[this.state.right_index]]
        this.setState({nums: nums})
        return nums
    }
    
    moveNumber(from, to) {
        let numbers = [...this.state.numbers]
        let num = numbers[from];
        numbers.splice(from, 1);
        numbers.splice(to, 0, num);
        this.setState({numbers: numbers})
    }

    check_answer(direction) {
        if (direction === "left") {
            return (this.state.nums[0] <= this.state.nums[1]);
        } else if (direction === "right") {
            return (this.state.nums[1] <= this.state.nums[0]);
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="numbers">
                    {this.state.numbers.map((num, index) => {
                        return(<li key={index}>{num}</li>)
                    })}
                </div>
                <div tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
                    <div><p>Which number is smaller?</p></div>
                    <p>{this.state.nums[0]}</p>
                    <p>{this.state.nums[1]}</p>
                    {this.state.incorrect ? <p>❌</p> : null}
                </div>
            </div>
        )
    }
}

export default BubbleGame;