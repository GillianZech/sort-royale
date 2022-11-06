import React, {Component, createContext} from 'react';
import Stopwatch from './stopwatch.js'



class SelectGame extends Component {
    constructor (props) {
        super();
        let numbers = props.numbers;
        let answer = Math.min(...numbers);

        this.state = {
            numbers: numbers,
            answer: answer,
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

    moveLeft() {
        if (this.state.right_index > this.state.left_index) {
            this.setState({right_index: this.state.right_index - 1})
        }
    }

    moveRight() {
        if (this.state.right_index < (this.state.numbers.length - 1)) {
            this.setState({right_index: this.state.right_index + 1})
        }
    }

    select() {
        this.setState({incorrect: false})
        if(this.state.answer == this.state.numbers[this.state.right_index]) {
            this.moveNumber(this.state.right_index, this.state.left_index)
            this.setState({left_index: this.state.left_index + 1, right_index: this.state.left_index + 1, answer: Math.min(...this.state.numbers.slice(this.state.left_index + 1))})
        } else {
            this.setState({incorrect: true})
            console.log(this)
        }
    }
    
    
    handleKey = (e) => {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
        if (this.state.allow_next) {
            switch (e.key) {
            case "a":
            case "ArrowLeft":
                this.moveLeft();
                this.setState({allow_next: false})
                break;
            case "d":
            case "ArrowRight":
                this.moveRight();
                this.setState({allow_next: false})
                break;
            case "w":
            case "ArrowUp":
                this.select();
                this.setState({allow_next: false})
                break;
            default:
                break;
            }
        } else {
            this.setState({allow_next: true})
        }
    }

    checkIsSorted() {
        let numbers = this.state.numbers;
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i+1] < numbers[i]) {
                return false;
            }
        } 
        return true;
    }

    getNextNumbers() {
        this.setState({complete: this.checkIsSorted()});
        this.setState({left_index: this.state.left_index + 1, right_index: this.state.left_index + 1});
        this.setState({answer: Math.min(...this.state.numbers.slice(this.state.left_index))})
    }
    
    moveNumber(from, to) {
        if (from===to) {
            return null;
        }
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
                    <h1>Single Player</h1>
                    <div className="numbers array">
                        {this.state.numbers.map((num, index) => {
                            return(<li key={index}>{num}</li>)
                        })}
                    </div>
                    <div className='active-game' tabIndex={0} onKeyDown={this.handleKey} ref={this.myDiv}>
                        <h2>Which is the smallest number?</h2>
                        <div className='comparison'>
                            <p>{this.state.numbers[this.state.left_index]}</p>
                            <p>{this.state.numbers[this.state.right_index]}</p>
                        </div>
                        {this.state.incorrect ? <p>❌</p> : null}
                    </div>
                    <div className='timer'>
                        <Stopwatch glob = {this.time}/>
                    </div>
                </div>
            )
        } else {
            return (
            <div>
                <p>You win!</p>
                <p>Your time:</p>
            </div>
            );
        }

    }
}

export default SelectGame;