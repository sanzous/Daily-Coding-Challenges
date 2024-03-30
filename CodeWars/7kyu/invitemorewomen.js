//P We are given an array of integers, 1 or -1 as the elements in the array
//R We need to return true or false depending on if there more 1's than there are -1's
//E [1, 1, 1] will return true as there are 3 1's and 0 -1's
//P We use the reduce function on the array to add all the elements together. We can then check if the sum is greater than equal to 1 which means there are more 1s than there are -1s
function inviteMoreWomen(L) {
    return L.reduce((p,c) => p + c , 0) >= 1
  }