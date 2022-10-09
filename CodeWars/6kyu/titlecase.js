// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

//Parameters -- Given 2 strings, the title of the book that needs to be title cased, and a string of words that are ignored for title case
//Return -- The function will return the Title now under TitleCase where every word is now starts with a capital except for the minor words.
//Any word that starts at the front will always be capitalized
//Example -- if given two strings a title of 'sun Tzu's the Art of war' and a string of minorWords 'the of' the function should return Sun Tzu's the Art of War
//Pseudo Code -- 
//make a new variable holding a lowercased version of title
//return an empty string if title is also an empty string
//if minorwords is empty just return title titleCased. this can be accomplished by taking the new variable and capitalizing the first letter of each word
//can use the charAt method on each word of the string capitalizing it and then slicing the first letter of each title word and replacing it with the capitlized letter
//if minorwords is not empty can split the title into an array and then use the map method to create a new array capitalizing each word using the function above while ignoring any minorWords
//then we return the new titleCased title

function titleCase(title, minorWords) {
    if (!title) {
        return title
    }
    let titleCase = []
    const titleLower = title.toLowerCase().split(' ')
    if (minorWords !== undefined) {
        const minorWordsLower = minorWords.toLowerCase().split(' ')
        titleCase = titleLower.map(e => !minorWordsLower.includes(e) ? e[0] = e.charAt(0).toUpperCase() + e.slice(1) : e).join(' ')
    }
    else {
        titleCase = titleLower.map(e => e[0] = e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
    }
    return titleCase.charAt(0).toUpperCase() + titleCase.slice(1)
}
