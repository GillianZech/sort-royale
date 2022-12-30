// Abstract base class that all game algorithms should inherit from

class BaseAlgo {
    constructor() {
        if (this.constructor === BaseAlgo) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }

    checkIsSorted() {
        throw new Error("Method 'checkIsSorted()' must be implemented.");
    }
    
    getNums() {
        throw new Error("Method 'getNums()' must be implemented.");
    }

    checkCorrect() {
        throw new Error("Method 'checkCorrect()' must be implemented.");
    }

    moveNumber() {
        throw new Error("Method 'moveNumber()' must be implemented.");
    }
}

export default BaseAlgo