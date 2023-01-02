// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.


//P - an array of strings
//R - the same array but with each element that contains rotten replaced by the same element with rotten removed
//E - removeRotten(["rottenApple","banana","kiwi","melone","rottenOrange"]), ["apple","banana","kiwi","melone","orange"]
//P - first we put a condition to check for null/falsy given parmaters. We then use the map method on the given array paramater. For each element we check if it includes rotten. If it does we use the replace method to replace 'rotten' with an empty '' and then use the lowercase method as well. if not then we just return the element as is
function removeRotten(bagOfFruits) {
    if (!bagOfFruits) {
        return []
    }
    return bagOfFruits.map(e => e.includes('rotten') ? e.replace('rotten', '').toLowerCase() : e)
}