// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s) {
    let upper = 0
    let lower = 0
    let split = s.split('')
    for (let i = 0; i < split.length; i++) {
        split[i] === split[i].toLowerCase() ? lower++ : upper++
    } return upper > lower ? s.toUpperCase() : s.toLowerCase()
}