// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

//P - an object containing a key value pair, the key and value being string, the key a person and the value as their department
//R - a string depending on a score of the given object. each department value has a score
//E {tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }, 'kill me now'
//P - First we create an object for the scores, the key will be the department and the value will be the integer 
// then we create a variable to hold the total
// We then iterate through the given staff parameter with a for in loop and for each loop we add to the total the score of the staffs department by using
// score[staff[key]], the staff[key] will grab the department then score[department] will be its integer equivalent we add to total
// we then check total to see which message to return

function boredom(staff) {
    let score = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25
    }
    let total = 0
    for (const key in staff) {
        total += score[staff[key]]
    } return total <= 80 ? 'kill me now' : total < 100 && total > 80 ? 'i can handle this' : 'party time!!'
}