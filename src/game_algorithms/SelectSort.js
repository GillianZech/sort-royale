import BaseAlgo from "./BaseAlgo";

class SelectSort extends BaseAlgo{
    constructor (numbers) {
        super(); 

        this.numbers = numbers
        this.left = 0
        this.right = 0
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

    incRight() {
        this.right += 1

        if (this.right === this.numbers.length) {
            this.right = 0
        }
    }

    decRight() {
        this.right -= 1

        if (this.right === -1) {
            this.right = this.numbers.length - 1
        }
    }

    incLeft() {
        this.left += 1
    }
    
    checkCorrect(key) {
        if (key === "w" || key === 'ArrowUp') {
            // Make sure the right number is to the right of the left number
            if (this.right <= this.left) {
                return false
            }

            // Check if right number is the smallest remaining (swap left and right)
            let num = this.numbers[this.right]
            for (let i = this.left; i < this.numbers.length; i++) {
                if (this.numbers[i] < num) {
                    return false
                } else if (this.numbers[i] === num && this.right > i) {
                    // If there's a duplicate, make sure it's the first appearing of the duplicates
                    return false
                }
            }
            return true
        } else if (key === "s" || key === 'ArrowDown') {
            // Check if left number is the smallest remaining (no swaps)
            // Duplicates should not be swapped
            let num = this.numbers[this.left]
            for (let i = this.left; i < this.numbers.length; i++) {
                if (this.numbers[i] < num) {
                    return false
                }
            }
            return true
        }
    }

    swapNumbers(first, second) {
        [this.numbers[first], this.numbers[second]] = [this.numbers[second], this.numbers[first]]

        // var temp = this.numbers[second];
        // this.numbers[second] = this.numbers[first];
        // this.numbers[first] = temp;
    }
}

export default SelectSort;