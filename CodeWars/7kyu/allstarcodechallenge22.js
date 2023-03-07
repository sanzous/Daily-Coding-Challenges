//P - an integer equal to the amount of seconds given
//R - the amount of hours and minutes from the seconds given
//E - 3601 --> "1 hour(s) and 0 minute(s)"
//P - first we set a variable for the amount of hours and set that to 0, we then loop through
// seconds with a while loop. While seconds is greater than a full hour or 3600 we increment the hour varaible
// and subtract 3600 from seconds
// what we have leftover is the minutes that we find by dividing it by 60 and using math.trunc to drop any fractionals

function toTime(seconds) {
    let h = 0;
    while (seconds >= 3600) {
        h += 1;
        seconds -= 3600;
    }
    let min = Math.trunc(seconds / 60)
    return `${h} hour(s) and ${min} minute(s)`
}