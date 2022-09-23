// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false
    }
    let comparray = array1.map(e => e * e)
    comparray = comparray.sort((a, b) => a - b)
    array2 = array2.sort((a, b) => a - b)
    return Array.isArray(comparray) && Array.isArray(array2) && comparray.length === array2.length && comparray.every((val, index) => val === array2[index])
}