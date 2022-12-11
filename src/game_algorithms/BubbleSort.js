import BaseAlgo from './BaseAlgo.js';

class BubbleSort extends BaseAlgo {
    constructor (numbers) {
        super();

        this.numbers = numbers
        this.left = 0
        this.right = 1
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

    getNums() {
        return [this.numbers[this.left], this.numbers[this.right]]
    }

    incNums() {
        this.left += 1
        this.right += 1

        if (this.right === this.numbers.length) {
            this.left = 0
            this.right = 1
        }
    }
    
    checkCorrect(key) {
        if (key === "a" || key === 'ArrowLeft') {
            // Check if left number is smaller
            return this.numbers[this.left] <= this.numbers[this.right]
        } else if (key === "d" || key === 'ArrowRight') {
            return this.numbers[this.right] <= this.numbers[this.left]
        }
    }

    moveNumber(from, to) {
        let num = this.numbers[from];
        this.numbers.splice(from, 1);
        this.numbers.splice(to, 0, num);
    }
}

export default BubbleSort;