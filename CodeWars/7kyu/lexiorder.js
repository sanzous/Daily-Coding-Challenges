// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

//P - an array of strings
//R - the same array of strings sorted in lexographical order
//E - ["one", "two", "three"], ["one", "three", "two"]
//P - We can use .sort() to get the lexographical order

export function sortMe(names: string[]): string[] {
    return names.sort()
}