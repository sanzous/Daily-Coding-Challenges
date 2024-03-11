// P We are given an array of integers, the array will always have atleast 2 elements and will always be integers
// R We return an array from the given array of integers, the returned array will have the 2 largest integers with the first item being the 2nd largest and the 2nd item being the largest
// E [1,5,87,45,8,8] should return [45, 87]
// P We create a new array using the given array and sort it using the sort method sorting by largest to smallest
// We then create another new array with the first element being the 2nd element of the sorted array and the 2nd element being the 1st element of the sorted array and then return that
function twoOldestAges(ages){
    let sorted_ages = ages.sort((a,b) => b - a)
    let oldest_ages = [sorted_ages[1], sorted_ages[0]]
    return oldest_ages
  }