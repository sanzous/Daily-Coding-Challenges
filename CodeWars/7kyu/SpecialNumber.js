//P - an integer that will always be greater than 0
//R - if the integer only contains the digits 0 to 5 then we return Special otherwise we return NOT
//E - specialNumber(25432),"Special!!"
//P - First we create a variable called special to hold all the special integers as strings
// Then we take the given integer, turn it into a string that way we can split it into an array. We the  use the filter method
//and on each element check to see if the element is not included in the special variable using the includes method. 
// We then check to see if the remaining array is longer than 0 length. If it is we return NOT and if its 0 we return Special

function specialNumber(n) {
    const special = ['0', '1', '2', '3', '4', '5']
    return n.toString().split('').filter(e => !special.includes(e)).length > 0 ? 'NOT!!' : 'Special!!'
}