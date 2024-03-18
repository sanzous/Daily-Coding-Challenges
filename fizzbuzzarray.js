//P We are given n, an integer as a parameter
//R We return an array, the array should be filled with integers from 1 up to n. If the integer is divisible by 3 it should be replaced by fizz, if divisible by 5 should be replaced
// with buzz and if divisible by 3 and 5 should be replaced with fizz buzz
//E If given 10 as n the return should be [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
//P First we creat a new empty array, this will hold the array of elements that will be returned by the function. We then create a loop that starts at 1 and ends on N. For each loop
// We first check if the number is divisible by 3 and 5 as if its checked last it will never be run as any number divisible by 3 or 5 will also return true. For any numbers divisible by
// 5 and 3 we push into the array FizzBuzz, if divisible by 3 we push Fizz and if by 5 we push Buzz. If none of those checks are true then we just push the variable i into the array
// as that is the current integer is currently being check
// We then return the array from the function
function fizzbuzz(n)
{
  let answer = []
  for(let i = 1; i <= n; i++){
    if(i % 3 == 0 && i % 5 == 0){
      answer.push('FizzBuzz')
    }else if( i % 3 == 0){
      answer.push('Fizz')
    }else if(i % 5 == 0){
      answer.push('Buzz')
    }else answer.push(i)
  }return answer
}