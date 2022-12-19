// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

//P - An integer greater than 0 
//R - The greatest version of that integer after rotating all the numbers
//E - 38458215, 85821534
//P - first we create an array variable to hold all versions of the number
// We then turn the given paramater into an array of its numbers as strings so we can move them around
// We then use a for loop to iterate over the new array.
// Inside the for loop we create a toRotate variable that will hold the number to be rotated left
// We then remove it using the splice method
// We then push the toRotate variable to the end with the push method and then push that new number with the join method to the array holding all the values
// We then use Math.max and spread the array so it will return the largest 

function maxRot(n) {
    let array = [n]
    let splittedParameter = n.toString().split('')
    for (let i = 0; i < splittedParameter.length; i++) {
        let toRotate = splittedParameter[i]
        splittedParameter.splice(i, 1)
        splittedParameter.push(toRotate)
        array.push(+splittedParameter.join(''))
    }
    return Math.max(...array)
}