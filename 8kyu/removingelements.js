// PREP

//Parameters An array that can contain strings,nums,objects,arrays but none will be empty

function removeEveryOther(arr) {
    //your code here
    //Example [hello,goodbye,hello again] would return [hello, hello again]

    //Pseudo
    //Take the array
    //Use a for loop
    //for every second index element remove it. This can be accomplished by removing index items divisible by 2
    for (let i = 1; i < arr.length; i++) {

        arr.splice(i, 1)

    } return arr



    //Return An array with every second element removed
}