// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

//Parameters -- Two arrays being cuboids containing 3 integers each > 0
//Return -- the difference between the two arrays/cuboids 
//Example -- a [1,2,3] b[2,3,4] would return 18 since a would be 6 and b would be 24
//PsuedoCode -- reduce both a and b then minus the largest from the smallest

function findDifference(a, b) {
    return Math.abs(a.reduce((p, c) => p * c) - b.reduce((p, c) => p * c))
}