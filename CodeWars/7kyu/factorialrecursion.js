You have to create the function factorial that receives n and returns n!.You have to use recursion.


//P - an integer that is 0 or greater
//R - the factprial of the given paramater but the function must use recursion
//E - factorial(3), 6
//P - First we'll check if the current is is greater than 0 as a factorial is the product of all
// positive integers less than or equal to n
// if its greater than 0 we return the n * factorial(n - 1) which will be the current n * n - 1 and so on until n reaches 0 then it will return 1


const factorial = n => {
    if (n < 1) {
        return 1
    }
    return n * factorial(n - 1)
};