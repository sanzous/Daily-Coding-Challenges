function lastManStanding(n) {

    //make an array with numbers from 1  - n
    let arr = Array.from(Array(n), (e, i) => i + 1);

    //make a loop till length of array is equal to 1
    while (arr.length > 1) {
        //filter used to take out first index and then every other index
        //reverse to start at "right-side" after loop then go back to "left-side" and vice versa until length == 1
        arr = arr.filter((e, i) => !(i % 2 == 0)).reverse()
    }
    //make arr into string and turn into number
    return Number(arr.toString())

}