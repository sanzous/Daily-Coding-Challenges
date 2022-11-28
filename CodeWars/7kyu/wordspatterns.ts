// In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

// A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

// As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

// Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".

//P - a string containing a word of letters
//R - The same string but each letter changed to a numerical value, the first time it is seen it will be assigned a permanent number
//E - "hello", "0.1.2.2.3"
//P - First we create a variable to hold an object that will hold the key value pairing of letters and integer value, a new array to hold
// the given paramater lowercased and splitted, a variable to hold the current number count, and then a variable to hold what will be returned
//We then create a loop, the loop will first check if the current element exists in the words object, if it is it will push the value to the ans array
// if not it will increment the current count and then insert the current element as the key and then the current count as the value to the object
// it will then push the current count to the ans array
// once the loop is finished we join the ans array with a period and then return that

export function wordPattern(word: string): string {
    const words: any = {}
    const arr: string[] = word.toLowerCase().split('')
    let count: number = 0
    let ans: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in words)) {
            words[arr[i]] = count
            ans.push(count)
            count++
        } else if (arr[i] in words) {
            ans.push(words[arr[i]])
        }
    }
    return ans.join('.')
}