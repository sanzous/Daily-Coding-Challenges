//PREP
//Parameteres. We will get hours minutes and seconds as parameters. This will be the time that has passed since midnight
function past(h, m, s) {
    const hoursInMinutes = h * 60
    const minutesInSeconds = (m + hoursInMinutes) * 60
    return (s + minutesInSeconds) * 1000
    //Psuedo 
    //turn the hours into minutes and add to minutes
    //turn the minutes into seconds
    //turn seconds into milliseconds
    //milliseconds is the result of time since midnight since midnight is 0:00

    //Example Given paremeters of 0:11 which is 11 minutes after midnight the return result will be 61000 milliseconds

    //Return. We will return the amount of milliseconds after midnight.   
}