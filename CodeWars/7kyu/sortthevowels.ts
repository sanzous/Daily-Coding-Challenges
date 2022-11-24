// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:


//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

//P - a string containing characters that can be lower or upper case
//R - the same string but all vowels on the right side of a | and every other letter on the left side of a |
//E - 'Codewars', 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
//P - First we create a variable to hold all the vowels 
// then we create another variable to hold an array of strings that will contain the str after we split it
// we then make sure to check that we only work on parameters that are strings. We can then reassign arr to equal the array of the split elements
// We can then use the map method and check on each element if the string vowels contains the current element. if it does we return |element\n if not we return element|\n
// we then join the array and return that and we make sure to leave out the last space

export function sortVowels(str?: number | string | null): string {
    const vowels: string = 'aeiou'
    let arr: string[] = []
    if (typeof str == 'string') {
        const string: string = str
        arr = string.split('')
    }
    const ans: string = arr.map(e => vowels.includes(e.toLowerCase()) ? `|${e}\n` : `${e}|\n`).join('')
    return ans.slice(0, ans.length - 1)
}