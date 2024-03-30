//P We are given an array of integers, they can be positive or negative and the integers can repeat and can be negative or positive
//R We will need to return from the function the integer in the array, that only shows up in the array as either only negative or only positive
//E [-110,110,-38,-38,-62,62,-38,-38,-38] will return -38 as -38 is the integer that shows up in the array as only a negative with no positive value of itself
//R First we create a ans variable to hold the integer that will be returned
// We then iterate over the array, on each element we check to see if the array includes e but not the opposite value of e, if true ans becomes e and we return ans


function solve(arr){
    let ans
    arr.forEach((e,i,arr) => {
        if(arr.includes(e) && !arr.includes(-e)){
          ans = e
          }
        })
    return ans
  };