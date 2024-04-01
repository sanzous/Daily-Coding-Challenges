function calculate(num1, operation, num2) {
    let operators = ['+','-','*','/']
    if(!operators.includes(operation) || (operation == '/' && num2 === 0)){
      return null
    }
     let operations = [num1,operation,num2]
     return eval(operations[0] + operations[1] + operations[2])
   }