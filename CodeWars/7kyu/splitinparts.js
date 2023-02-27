//P - A string and an integer that determines how long the parts of the string will be split into
//R - The string but split by spaces with each part the length of the length given in the parameter
//E - Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
//P - first we'll create an empty array to hold all the seperate parts of the string
// Then we set a count variable to track the amount of elements we have in a tempstr variable
// We then loop through the array and for each element we add it to the tempstr and add 1 to the count variable
// We then check if count is equal to the given partLength or if we have reached the end of the loop
// We then push the current tempstr to the newstr array and reset tempstr and count
// We then return the newstr array with the join method.

var splitInParts = function (s, partLength) {
    let newstr = []
    let count = 0
    let tempstr = ''
    for (let i = 0; i < s.length; i++) {
        tempstr += s[i]
        count++
        if (count == partLength || i == s.length - 1) {
            newstr.push(tempstr)
            count = 0
            tempstr = ''
        }
    }
    return newstr.join(' ')
}