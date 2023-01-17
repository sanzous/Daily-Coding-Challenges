/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//P - two parameters each a string of letters
//R - true if the two string are isomorphic false if not
//E - Input: s = "paper", t = "title"
// Output: true
//P - First we create a function called get pattern that will take in the string parameter
// We then create a new map object
// We set a variable id to hold the object property 'id' and a pattern variable 
// to hold the pattern of the string 
// we then set a for loop that will go through the string
// We set a char variable to the current str element
// we then check if the current element is inside the map object
// If it isn't we set it tot he map object with the current element and the id incremented as its 'id'
// we then add to pattern the current element id by using map.get
// we then return this pattern as the output for the inner function
// in the main function we then return the function getPattern for both s and t and return if they're equal or not
var isIsomorphic = function (s, t) {
    function getPattern(str) {
        const map = new Map();

        let id = 0, pattern = ``;

        for (let i = 0, n = str.length; i < n; i++) {
            const char = str[i];

            if (!(map.has(char)))
                map.set(char, ++id);

            pattern += map.get(char);

        }

        return pattern;
    }

    return getPattern(s) === getPattern(t);
}