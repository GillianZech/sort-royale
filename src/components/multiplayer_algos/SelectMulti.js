class SelectMulti {
    constructor (numbers) {
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
            this.right = this.left
        }
    }

    incLeft() {
        this.left += 1
    }
    
    checkCorrect(key) {
        if (key === "w" || key === 'ArrowUp') {
            // Check if right number is the smallest remaining
            let num = this.numbers[this.right]
            for (let i = this.left; i < this.numbers.length; i++) {
                if (this.numbers[i] < num) {
                    return false
                }
            }
            return true
        } else if (key === "s" || key === 'ArrowDown') {
            // Same thing but switch results
            let num = this.numbers[this.right]
            for (let i = this.left; i < this.numbers.length; i++) {
                if (this.numbers[i] < num) {
                    return true
                }
            }
            return false
        }
    }

    swapNumbers(first, second) {
        [this.numbers[first], this.numbers[second]] = [this.numbers[second], this.numbers[first]]

        // var temp = this.numbers[second];
        // this.numbers[second] = this.numbers[first];
        // this.numbers[first] = temp;
    }
}

export default SelectMulti;