// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
    let team1 = 0
    let team2 = 0
    array.forEach((e, i) => {
        if ((i + 1) % 2 === 0) {
            team2 += e
        } else team1 += e
    })
    return [team1, team2]
}