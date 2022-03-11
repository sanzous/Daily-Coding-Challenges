//PREP
//Parameters. What will be given is a string of any length with capital cases somewhere or multiple cases of
// capital cases in the string
function solution(string) {
    // Example. if given camelCase the return should be camel Case 
    // Pseudo Code
    //   Take String and Convert to Array
    string = Array.from(string)
    //   For Loop to cycle through each letter
    for (let i = 0; i < string.length; i++) {
        //   A way to check each index against itself to see if its uppercase
        if (string[i] !== string[i].toLowerCase()) {
            //   If uppercase splice in a empty space before it
            string.splice(i, 0, ' ');
            i++
        }
        //   Join the array into a string and return it
    } return string.join('')
}

    // Return. What should be returned is the string but with a space added before each capital letter