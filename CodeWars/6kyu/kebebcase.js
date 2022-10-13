// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

//P -- will always be a string that is written in camel case, the string may contain letter or numbers but will still be type of string
//R -- the same string but all lowercased, all numbers removed, and each camelcased word now seperated by hypens
//E -- my4String will return my-string
//P -- First we can split the parameter and assign it to a new variable. then we can loop through the array
// and check if a letter is uppercase. if it is we can add a hypen before it to make it into kebab case.
//after we do this we can then loop once more to remove any elements that are numbers and then join the array making the new string kebeb case
// we set a conditional at the end if the returned string starts with a hyphen we can remove the hyphen before returning the string by using slice.

function kebabize(str) {
    let split = str.split('')
    for (let i = 0; i < split.length; i++) {
        if (split[i] !== split[i].toLowerCase()) {
            split.splice(i, 0, '-')
            i++
        }
    }
    split = split.join('').split('').filter(e => e != +e).join('').toLowerCase()
    if (split[0] == '-') {
        return split.slice(1)
    }
    return split
}