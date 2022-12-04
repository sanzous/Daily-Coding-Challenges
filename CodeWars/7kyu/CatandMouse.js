// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

//P - A string containing the letters C and m and any number of '.'
//R - If the distance between C and m is 3 or less then return 'Caught' else 'Escaped'
//E - 'C....m', "Escaped!"
//P - First we find the index of where C is and where m is. Then we add one to C since arrays start at index 0, We then subtract the total
// of the two new variables and get the absolute value and return the appropiate answer

function catMouse(x) {
    const indexOfCat = x.split('').indexOf('C') + 1
    const indexOfMouse = x.split('').indexOf('m')
    return Math.abs(indexOfCat - indexOfMouse) <= 3 ? 'Caught!' : 'Escaped!'
}