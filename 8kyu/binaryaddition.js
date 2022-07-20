function arr2bin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            arr[i] = 0;
        }
    } return arr.reduce((p, c) => p + c, 0).toString(2)
}