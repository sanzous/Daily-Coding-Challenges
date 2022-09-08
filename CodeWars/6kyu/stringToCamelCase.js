// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).function toCamelCase(str){
function toCamelCase(str) {
    if (str.length == 0) { return '' }
    let splitter = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    splitter = str.toLowerCase().split('').filter(e => !alphabet.includes(e))[0]
    const newString = str.split(`${splitter}`)
    let i = 0
    if (newString[0] == newString[0].toLowerCase()) {
        i++
    }
    for (i; i < newString.length; i++) {
        newString[i] = newString[i].split('')
        newString[i][0] = newString[i][0].toUpperCase()
        newString[i] = newString[i].join('')


    } return newString.join('')

}
