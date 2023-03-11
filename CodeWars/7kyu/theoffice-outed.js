//P - An object containing keys being your coworkers and values being their happiness value and a string containing your boss' name
//R - Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
//E -outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!')
//P - First we will set 2 variables happiness and people to keep track of the current amount for both
// We then iterate through the object with a for of loop
// We check first to see if the current person is your boss, if it is we add to the current happiness double the value of that key
// If we not we just add the value to the happiness, we then increment people since we added 1 more person
// We then return happiness with a check to see if its greater than 5 and return the appropiate string

function outed(meet, boss) {
    let happiness = 0;
    let people = 0
    for (const key of Object.keys(meet)) {
        if (key == boss) {
            happiness += (meet[key] * 2)
        } else {
            happiness += meet[key]
        }
        people++
    } return happiness / people <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}