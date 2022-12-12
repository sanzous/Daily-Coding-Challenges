// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

//P - an aray of integers
//R - an array of integers where each element is the product of the given array not including the current index element
//E - [3,27,4,2]), [216,24,162,324]
//P - first we create an empty array variable
// then we create a for loop, inside the for loop we push to ans the numbers array filtered where the current ind does not equal to the current for loop i
// we then reduce the array by multiplying the all the elements together.

function productArray(numbers) {
    let ans = []
    for (let i = 0; i < numbers.length; i++) {
        ans.push(numbers.filter((e, ind) => ind !== i).reduce((p, c) => p * c))
    } return ans
}