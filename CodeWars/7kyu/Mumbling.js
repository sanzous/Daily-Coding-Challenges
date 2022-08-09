// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z

function accum(s) {
    let ans = []
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        let str = (s[i].repeat(i + 1)).toLowerCase()
        str = str.split('')
        str[0] = str[0].toUpperCase()
        str = str.join('')
        ans.push(str)
    }
    return ans.join('-')
}