// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
//P - A string of letters,integers,and spaces
//R - the same string but changed to leetSpeak where each letter has its own leetSpeak value
//E - toLeetSpeak("LEET"), "1337"
//P - First we create an object to hold the alphabet and the values they have in leetSpeak
// We then split the given str and create a new array using the map method, on each element if it exists in the leetSpeak object we then return
// The leetspeak value of the element else we just return the current element. we then join that and return it.

function toLeetSpeak(str) {
    const leetSpeak = {
        A: '@',
        B: '8',
        C: '(',
        D: 'D',
        E: '3',
        F: 'F',
        G: '6',
        H: '#',
        I: '!',
        J: 'J',
        K: 'K',
        L: '1',
        M: 'M',
        N: 'N',
        O: '0',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: '$',
        T: '7',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: '2'
    }
    return str.split('').map(e => leetSpeak[e] ? leetSpeak[e] : e).join('')
}