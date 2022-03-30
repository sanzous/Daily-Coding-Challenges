function wave(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        let copy = str.split('');
        if (copy[i] !== ' ') {
            copy[i] = copy[i].toUpperCase()
            newArr.push(copy.join(''))
        }
    }
    return newArr
}