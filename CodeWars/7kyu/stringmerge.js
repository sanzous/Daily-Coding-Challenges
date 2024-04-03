function stringMerge(string1, string2, letter){
    let str1 = string1.split('').splice(0, string1.indexOf(letter)).join('')
    let str2 = string2.split('').splice(string2.indexOf(letter)).join('')
    return str1 + str2
  }