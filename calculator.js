const Calculator = (() => {
  let history = []

  function add(a, b) {
    const result = a + b
    history.push({ operation: "add", operands: [a, b], result })
    return result
  }

  function subtract(a, b) {
    const result = a - b
    history.push({ operation: "subtract", operands: [a, b], result })
    return result
  }

  function multiply(a, b) {
    const result = a * b
    history.push({ operation: "multiply", operands: [a, b], result })
    return result
  }

  function divide(a, b) {
    if (b === 0) {
      const error = "Cannot divide by zero";
      history.push({ operation: "divide", operands: [a, b], result: error })
      return error
    }
    const result = a / b
    history.push({ operation: "divide", operands: [a, b], result })
    return result
  }

  function getHistory() {
    return history
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    getHistory
  };
})();

console.log(Calculator.add(5, 3)) 
console.log(Calculator.subtract(5, 3))
console.log(Calculator.multiply(5, 3))
console.log(Calculator.divide(5, 0))
console.log(Calculator.divide(10, 5))
console.log(Calculator.getHistory())