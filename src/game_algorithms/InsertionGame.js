import React, {Component, createContext} from 'react';
import Stopwatch from './stopwatch.js'

class InsertionGame extends Component {
    time = []
    constructor (props) {
        super();
        let numbers = props.numbers;

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
        try{
            this.myDiv.current.removeEventListener('keydown', this.handleKey);
        } catch(err) {
            console.log(err)
        }
    }

    handle = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            // Left is smaller, go to next numbers
            this.getNextNumbers();
            this.setState({incorrect: false})
    }

}}



export default InsertionGame;