// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

//P - An array of integers that are greater than 1 and less than or equal to 29
//R - An array of letters where each letter has a corrseponding integer value
//E - ['24', '12', '23', '22', '4', '26', '9', '8'], 'codewars'
//P - First we create an object with the key value pair, the key being the integer thats in
// the given array and then the corresponding value being the letter or symbol
// We then map over the given array and for each element change it to its corresponding object value
// we then return the new array from the map with the join method

function switcher(x) {
    const obj = {
        1: 'z', 2: 'y', 3: 'x', 4: 'w', 5: 'v', 6: 'u', 7: 't', 8: 's', 9: 'r', 10: 'q',
        11: 'p', 12: 'o', 13: 'n', 14: 'm', 15: 'l', 16: 'k', 17: 'j', 18: 'i', 19: 'h', 20: 'g',
        21: 'f', 22: 'e', 23: 'd', 24: 'c', 25: 'b', 26: 'a', 27: '!', 28: '?', 29: ' '
    }

    return x.map(e => obj[e]).join('')
}