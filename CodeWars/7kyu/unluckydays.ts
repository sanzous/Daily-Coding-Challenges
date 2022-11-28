// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

//P - A integer being the year entered by a user
//R - An integer being how many friday the 13th's there are in the user inputted year
//E - unluckyDays(2015), 3
//P - First we set a variable to hold the total amount of friday the 13ths in the entered year.
// We then create a loop and set the loop to end before 12 to simulate 12 months
// We then check on each loop by creating the date constructor with the given year, x being the current loop or month, and then 13 for the day.
// We then use the getDay() method and check to see if it equals to 5 which corresponds to friday. If it does we add 1 to unlucky. if not we add 0
// We then return unlucky to the user being the number of friday the 13ths on that given year.

export function unluckyDays(year: number): number {
    let unlucky: number = 0;
    for (let x = 0; x < 12; x++) {
        unlucky += new Date(year, x, 13).getDay() === 5 ? 1 : 0;
    }
    return unlucky;
}