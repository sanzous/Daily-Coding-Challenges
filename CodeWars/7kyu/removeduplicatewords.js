// P A string of words seperated by a space
// R the same string with all the repeating words removed and only showing up once per word
// E If given 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' the function should return 'alpha beta gamma delta'
// P We first create a new array of the split words using the split method on the given parameter. Once its been created we create another new array to hold all the elements. We then map
// through the arr of the split string, for each element if it is not in the new array we push the element into the array otherwise we continue to the next element. We then return the new array,

function removeDuplicateWords (s) {
    let arr = s.split(' ')
    let returned_arr = []
    arr.map( e => returned_arr.includes(e) ? 0 : returned_arr.push(e))
    return returned_arr.join(' ')    
  }