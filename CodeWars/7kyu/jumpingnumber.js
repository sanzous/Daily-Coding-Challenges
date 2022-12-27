// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .
//P - an integer that is greater than 0
//R - Jumping if all ajacent digits in it differ by 1 otherwise return Not
//E - jumpingNumber(8987), "Jumping!!"
//P - first we turn our given parameter into an array by turning it into an array and then using the split method
// We then create a variable to hold the boolean attribute if the number is jumping or not which we'll se as true
// We know that any single digit will always return jumping so we'll have that check
// We then loop through the number array and start counting at index 1. If during the current iteration the absolute value of the current index value
// minus the previous index value doesnt equal to 1 we'll set jump to false as we now know that the number isnt jumping
// We then return jump and check if its true we return Jumping and if false we return Not

function jumpingNumber(n) {
    let number = n.toString().split('')
    let jump = true
    if (number.length === 1) {
        return 'Jumping!!'
    }
    for (let i = 1; i < number.length; i++) {
        if (Math.abs(number[i] - number[i - 1]) !== 1) {
            jump = false
        }
    } return jump ? 'Jumping!!' : 'Not!!'
}