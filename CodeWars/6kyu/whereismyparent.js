// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".


//P - a string containing letters that can be upper or lower case
//R - the string ordered alphabetically
//E -  "aAbaBb" => "AaaBbb"
//P - first we turn the given string to a all lower case, split it into an array of elements and then sort it alphabetically
// We can then loop through the array with a for loop, at the start of the loop we change the first letter to an uppercase letter
// For each subsequent element we check if the current element and the previous element are the same non case sensitive. If it isn't that means
// we are at the next mother and children so we set the first new letter to uppercase.
// We then join the array and return that

function findChildren(dancingBrigade) {
    let splittedString = dancingBrigade.toLowerCase().split('').sort()

    for (let i = 0; i < splittedString.length; i++) {
        if (i == 0) {
            splittedString[0] = splittedString[0].toUpperCase()
        }
        else if (splittedString[i].toLowerCase() !== splittedString[i - 1].toLowerCase()) {
            splittedString[i] = splittedString[i].toUpperCase()
        }
    }
    return splittedString.join('')
}