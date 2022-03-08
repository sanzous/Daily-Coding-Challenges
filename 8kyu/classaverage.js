//PREP

//Parameters The parameters are an array of test scores (integers/whole numbers) and my test score


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    //Pseudo Code
    //reduce class points and get average
    const classAvg = classPoints.reduce((p, c) => p + c, 0) / classPoints.length - 1
    //check if class average is less than yourpoints and return true or false
    return classAvg < yourPoints
    //Example [2,3],5 will return true because 2+3 % 2 is less than 5

    //Return the return will be true if my score is higher than the average false if otherwise
}