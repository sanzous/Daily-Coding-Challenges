//Given a number n, return the number of positive odd numbers below n, EASY!

// Parameters are a single positive integer, must find odds before that integer
// Return the total amount of values that are odd before the given variable
// Example if n = 5 then return should be 2, the two numbers before 5 that are odd is 1 and 3
// Pseudocode, a for loop to go over every number before n and then a check to see if its odd. If its odd add 1 to the current count

function oddCount(n){
    let count = 0
    for(let i = n - 1; i > 0; i--){
      if(i % 2){
        count++
      }
    }return count
  }