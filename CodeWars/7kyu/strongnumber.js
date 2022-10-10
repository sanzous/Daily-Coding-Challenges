// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

function strong(n) {
    const factorialize = (num) => {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
    }

    const arr = n.toString().split('')
    const factorarr = arr.map(e => factorialize(e)).reduce((p, c) => p + c)
    return factorarr == n ? 'STRONG!!!!' : 'Not Strong !!'
}