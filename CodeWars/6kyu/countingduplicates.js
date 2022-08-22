// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    let counts = 0
    text = text.toLowerCase().split('')
    let count = {};
    text.forEach(v => {
        count[v] = count[v] ? count[v] + 1 : 1;
    });
    Object.values(count).forEach(e => e >= 2 ? counts++ : 0)
    return counts
}