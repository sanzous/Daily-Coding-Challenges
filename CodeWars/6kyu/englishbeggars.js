// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

//P - An array of integers that denotes the amount of money given and an integer that denotes the amount of beggars taking the money
//R - An array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.
//E - [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4]
//P - First we check to see if N is 0 and if it we return an empty array
// We then create a new variable called beggarTotals and create an array(n) to create an array of length n to show the amount of beggars
// And fill the array with 0's to show they all start with 0 money;
// We also create a turn variable to denote who's turn it is to recieve money
//We then create a for loop iterating over the values array
// We first check to see if turn needs to be reset back to 0 if its greater than the amount of beggars, if it is we reset turn to 0 or back to the first beggar
// If not we call the beggarTotal[turn]
function beggars(values, n) {
    if (!n) {
        return []
    }
    const beggarTotals = Array(n).fill(0)
    let turn = 0;
    for (let i = 0; i < values.length; i++) {
        if (turn >= n) {
            turn = 0
        }
        beggarTotals[turn] += values[i]
        turn++
    }
    return beggarTotals
}