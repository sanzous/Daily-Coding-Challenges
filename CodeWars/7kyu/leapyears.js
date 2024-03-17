//P we will be given an integer with with the range being 1600 ≤ input ≤ 4000
//R If the given variable is divisible by 4 or 400 but not 100 we return true else we return false
//E 2020 will return true as it is divisible by 4 true while 2015 will return false as it is not divisible by 4 false
//P First we'll check if the the given variable is divisible by 400, if it is we stop the function and return true, other wise we check if the given variable is 
// divisble by 4 and not by 100 we return true, else if both are not true we return false

function isLeapYear(year) {
    if(year % 400 == 0){
      return true
    }else if(year % 4 == 0 && year % 100 !== 0){
      return true
    }else return false
  }