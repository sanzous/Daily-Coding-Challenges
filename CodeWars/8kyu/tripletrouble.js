//P Parameters are 3 variables that are strings
//R Return is a one string with elements from all 3 variables given added together by grouped by their placement
//E an example of this would be if given ("aaa","bbb","ccc") the function should return "abcabcabc"
//P We will create a new variable to hold the new string. We can then start a loop with the loop starting at the beginning of the strings and ending at the length of the first variable.
// On each loop we create a new variable will be the current item loop , variable[loop number], all added together. We then add that new variable to the variable holding the new complete string.
// Once the loop is finished we return the new variable string.
function tripleTrouble(one, two, three){
    let new_string = ''
    for(let i = 0; i < one.length; i++){
      let current_string = one[i] + two[i] + three[i]
      new_string += current_string
    }
        return new_string
   }