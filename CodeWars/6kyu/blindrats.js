// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

//P - A string containign the Pied Pieper (P) and the rats going left 0~ or right ~0
//R - the amount of rats not following the pied pieper.
//E - "P O~ O~ ~O O~", 1
//P - First we will split the given parameter into an array we can iterate over
// First we find the index of P in the array 
// once we find the index of P we can create a for loop that will go through the array
// it will check before the index of P if the current rat is in the direction of P or not and do the same for elements after P
// we also need to create a variable to hold the amount of blind rats that will be added to whenever a blind rat is found

var countDeafRats = function (town) {
    let arr = []
    let blindRats = 0;
    for (let i = 0; i < town.length; i++) {
        const temp = town[i] + town[i + 1]
        if (town[i] === 'P') {
            arr.push(town[i])
        }
        if (temp === '~O' || temp === 'O~') {
            arr.push(temp)
            i++
        }
    } const indexOfPieper = arr.indexOf('P')
    for (let i = 0; i < arr.length; i++) {
        if (i < indexOfPieper) {
            arr[i] === 'O~' && blindRats++
        } else if (i > indexOfPieper) {
            arr[i] === '~O' && blindRats++
        }
    } return blindRats
}
