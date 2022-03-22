function squareOrSquareRoot(array) {
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 1 === 0) {
            newarr.push(Math.sqrt(array[i]));
        } else {
            newarr.push((array[i] * array[i]))
        }
    }
    return newarr;
}