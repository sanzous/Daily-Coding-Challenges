// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//Parameters -- for each function we'll be given a string of letters
//Return -- for encode we'll get a new string with all vowels replaced by numbers
//for decode we'll get a new string with all numbers 1-5 replaced by vowels
//Example -- encode('i love you') would return '3 l4v2 y45'
// decode('3 l4v2 y45')
//Psuedo Code -- We can use regex or we can create an object with the key being the letter or number being changed
//and the value being the number or letter that it will be changed into
// we can then split the string. use a map method to get a new array where if the element is present
// in the object we return into the new array the value of the key and if not we just return the letter from the string
// we then return the new array joined.

function encode(string) {
    const getEncode = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    }
    return string.split('').map(e => getEncode[e] ? getEncode[e] : e).join('')
}

function decode(string) {
    const getDecode = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u'
    }
    return string.split('').map(e => getDecode[e] ? getDecode[e] : e).join('')
}