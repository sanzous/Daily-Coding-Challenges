function zeroAndOne(s) {
    let arr = [...s];
    for (let i = 0; i <= arr.length; i++) {
        if ((arr[i] == arr[i + 1]) == false && arr[i + 1]) {
            arr.splice(i, 2)
            i--
        }
    } return arr.length
}