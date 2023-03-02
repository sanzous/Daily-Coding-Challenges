//P - an integer
//R an array containing the integers divisors or prime if the integer is a prime number
//E- divisors(12); // should return [2,3,4,6]
//P - First we create an empty array to hold all the divisors, we then create a for loop
// that will start at 2 and go until the integer given halved. We check on each loop if integer modulo the current i
// is equal to 0, if it is we push that to the array
// We then return the array and if the array is empty that means the number was a prime number and we return number is prime instead

function divisors(integer) {
    let ans = []
    for (let i = 2; i <= integer / 2; i++) {
        if (integer % i == 0) {
            ans.push(i)
        }
    } return ans.length > 0 ? ans : `${integer} is prime`
};