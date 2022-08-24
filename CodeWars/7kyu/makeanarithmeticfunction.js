// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator) {
    return operator === 'add' ? a + b
        : operator === 'subtract' ? a - b
            : operator === 'multiply' ? a * b
                : operator === 'divide' ? a / b
                    : 0
}