// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//P -- the parameters we are given will always be an array, will never be empty, and will always contain integers
//R -- We are returning from the array the number that appears the most times, and if 2 numbers are tired we go with the largest
//E -- an array of [1,2,2,2,3,4,4,4,5] would return 4 as 2 and 4 appear 3 times each but 4 is the higher number
//P -- We can create a new object and then loop through the array using a forEach
//as we loop through the array we make a conditional checking to see if the current element already exists as a key inside the
//new object. If it doesn't exist we create it and then set the value as 1. If it does exist we increment the value of that key by 1.
//then we can use object.keys to iterate through the object and use the reduce function to iterate through the new array and return the highest value and key

function highestRank(arr) {
    let count = {}
    arr.forEach(v => {
        count[v] = count[v] ? count[v] + 1 : 1
    })
    return +Object.keys(count).reduce((a, b) => {
        return count[a] > count[b] ? a : b
    });
}