// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

//P - a string of letters and punctuations. 
//R - the same string but each letter replaced by the nato equivalent word
//E - 'If you can read', "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
//P - first we create an object to hold each letter as the key and the value being the nato equvivalent word
// we then take the given parameter and use the toLowerCase method to ensure that each word is lowercase so we don't need to check for uppercase letters
// we then use the split method to create it into an array of words we then use the filter method to remove any empty elements
// we use the map method to make a new array returning either the nato equivalent word or the same element if its a punctuation
// we then use the join method and return that as the answer

function to_nato(words) {
    let nato = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliett',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'Xray',
        y: 'Yankee',
        z: 'Zulu'
    }
    return words.toLowerCase()
        .split('')
        .filter(e => e !== ' ')
        .map(e => nato[e] ? nato[e] : e)
        .join(' ')

}