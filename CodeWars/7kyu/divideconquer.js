// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x) {
    let strings = 0;
    let nums = 0;
    x.forEach(e => typeof e == 'string' ? strings += +e : nums += e)
    return nums - strings
}