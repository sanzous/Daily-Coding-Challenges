// Given an array / list[] of n integers, find maximum triplet sum in 

// P -- an array of numbers, will always be atleast 3 length, will contain positive negative and zeroes and can have repeating numbers
// R -- the sum of the 3 largest numbers not including duplicates
// E -- ([-7,12,-7,29,-5,0,-7,0,0,29]),41) since the highest is 29 ,12 and 0 which equals 41 we only count 29 once since we dont do duplicates
// P -- we can use the sort method on the array given to put sort by highest,we then make a temporary array to hold the 3 highest numbers
// then with a for loop we loop through the array until we have 3 numbers
// we put an if statement that if the number isnt in the array we add it to ensure no duplicates
// we then reduce the ans array and return it

function maxTriSum(numbers) {
    let ans = []
    const newarr = numbers.sort((a, b) => b - a)
    for (let i = 0; ans.length <= 2; i++) {
        if (!ans.includes(newarr[i])) {
            ans.push(newarr[i])
        }
    } return ans.reduce((p, c) => p + c, 0)
}