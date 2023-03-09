// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

//P - an array containing subarrays that contain a string and number, and an integer to compare 
//R - Loser if the total amount of subarrays 'winning' is less than the win integer given otherwise Winner
//E - bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!'
//P - first we will use the map method on the given array parameter, inside the map we set the element we are currently on
// to split the first element which will be the string given into an array. we then filter the array of letters and check if the character code
// is equal to the winning number or the 2nd element of the subarray. If it is it doesn't get filtered out. We then check at the current element
// of the map method if anything is remaining is inside the subarray, if something is remaining then that means it won and we can set it to 1 otherwise we set it to 0
// we then reduce the new array returned from the map and check if its larger than or equal to the win paramater.

function bingo(ticket, win) {
    return ticket.map(e => e[0].split('').filter(f => f.charCodeAt(0) == e[1]).length ? 1 : 0)
        .reduce((p, c) => p + c, 0) >= win ? 'Winner!' : 'Loser!'
}