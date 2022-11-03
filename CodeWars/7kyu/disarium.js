// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

//P - An integer
//R - a true or false statement if the number is a disarium or where each integer to the power of its index is equal to the number
//E - 89,"Disarium !!" because 8^1 + 9^2 = 89
//P - First we need to split the number into an array and we can do this by making it into a string and then using the split function
// we can then use the map method to create a new array where each number is returned into a number to the power of its index + 1
// we then reduce it down and compare it to the given integer paramater
// if true we return Disarium and if false we return Not

function disariumNumber(n) {
    return n.toString()
        .split('')
        .map((e, i) => Math.pow(Number(e), i + 1))
        .reduce((p, c) => p + c, 0) === n ? "Disarium !!" : "Not !!"
}