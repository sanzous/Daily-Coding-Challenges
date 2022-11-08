// Write a function that accepts str string and key number and returns an array of integers representing encoded str.

// Input / Output
// The str input string consists of lowercase characters only.
// The key input number is a positive integer.

//P - a string and a number 
//R - The string turned into an array of integers where each integer is the letter equivalent value starting at 1 for a
//E -"scout",1939 , [ 20, 12, 18, 30, 21]
//P - First we split the str to each seperate letter and then we do the same for the key by turning it into a string and then splitting it
// we also create an index variable to keep track of which part of the key we are on to add to the element being converted
// We then can use the map method to create a new array on the splitted string. in the map we turn each element into its integer value by using charCodeAt for its ascii
//code and then subtracting 96 since the alphabet ascii value starts at 97. we then add the current key[index] and then increment the index 
// if the index is greater than the key lenght we reset it back to 0

function encode(str, n) {
    let key = n.toString().split('')
    let ind = 0
    return str.split('').map(e => {
        if (ind > key.length - 1) {
            ind = 0
        }
        let cyphered = (e.charCodeAt(0) - 96) + +key[ind]
        ind++
        return cyphered
    })
}