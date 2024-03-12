//P Two parameters are given which are two strings
//R The two parameters will be returned in the form of "shortest" paremeter, "longest" parameter, "shortest" parameter added together as one string
//E An example would be if given the parameters ('U', 'False') it should return 'UFalseU'
//P First we need to find the shortest length parameter given. Once we are able to find that we can create a new variable with the shortest 
//longest and shortest variable added together to create a new string and return that from the function
function solution(a, b){
    let sorted_array = [a,b].sort((a,b) => a.length - b.length)
    return sorted_array[0] + sorted_array[1] + sorted_array[0]
  }
  
  