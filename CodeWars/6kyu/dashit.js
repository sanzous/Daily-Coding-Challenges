// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    if (Object.is(NaN, num)) {
        return 'NaN'
    }
    if (num < 0) {
        num *= -1
    }
    let numb = num.toString().split('')
    let arr = []
    let arr2 = []
    for (let i = 0; i < numb.length; i++) {
        if ((numb[i] % 2 == 0) && (numb[i + 1] % 2 == 0)) {
            arr.push(numb[i] + numb[i + 1])
            i++
        } else arr.push(numb[i])
    }
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 == 0) && (arr[i + 1] % 2 == 0)) {
            arr2.push(arr[i] + arr[i + 1])
            i++
        } else arr2.push(arr[i])
    }
    return arr2.join('-')
}