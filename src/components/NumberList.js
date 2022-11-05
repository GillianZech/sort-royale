import React, {Component} from 'react';

class NumberList extends Component {
    render () {
        return (
            <div>
                {this.state.numbers.map((num) => {
                    return(<p>num</p>)
                })}
            </div>
        )
    }

    constructor (numbers) {
        super();

        this.state.numbers = numbers
    }
}

export default NumberList;