// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//Parameter -- A string 
//Return -- true or false if the string contains the word english completed and not split
//Example -- a string of englrish would return false since it contains english but not as a word
//Psuedo Code -- we can use the .includes method to check if a string contains english

function spEng(sentence) {
    return sentence.toLowerCase().includes('english')
}