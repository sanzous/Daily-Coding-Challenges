// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

//P - a string of letters , numbers ,spaces and special characters
//R - the amount of 'clicks' required to type it in an old mobile phone
//E - presses("LOL"), 9,
//P - first we create an array to hold each 'button' of the mobile phone and its values including the number and spaces
// We then set the given paramater to an array using the split method and using the uppercase method to ensure no lowercase letters
// we then set a variable to hold the total amount of key presses
// On the phrase array we then use the forEach method and on each element we find the key pressed by using the filter method on chuncks
// we check each array element on chunks for the current phrase string element with the index of method. If it doesn't exist then itll return -1 and will be filtered out of chunks
// we then add to total the indexOf the current element found in the chunk that has been filtered and add 1 to that value since arrays start at 0 index value
// We then return the total

function presses(phrase) {
    let chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
        phrases = phrase.toUpperCase().split(''),
        total = 0;
    phrases.forEach(e => {
        const key = chunks.filter(c => {
            return c.indexOf(e) > -1;
        })[0];
        total += key.indexOf(e) + 1;
    });
    return total;
}