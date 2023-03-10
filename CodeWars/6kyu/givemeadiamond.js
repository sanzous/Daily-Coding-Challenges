// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
    //P - n is an integer for the amount of lines
    //R - a series of strings in the shape of a diamond using *s
    //E - A size 3 diamond:
    //  *
    // ***
    //  *
    //P - print the number of spaces that need to be in a given line
    //print the number stars that need to be in that line
    //print the carriage return
    if (n % 2 === 0 || n < 1) return null

    let numSpaces = Math.floor(n / 2)
    let numStars = 1
    let res = ''

    for (let i = 1; i <= n; i++) {
        //find and print the number of spaces
        //find and print the number of *s
        //print the carriage return

        res += `${' '.repeat(numSpaces)}${'*'.repeat(numStars)}\n`

        if (i < Math.ceil(n / 2)) {
            numSpaces -= 1
            numStars += 2
        } else {
            numSpaces += 1
            numStars -= 2
        }

    }

    return res
}