function squareDigits(num) {
    let newarr = Array.from(String(num), Number)
    console.log(newarr)
    for (let i = 0; i < newarr.length; i++) {
        newarr[i] = newarr[i] * newarr[i]
    } return Number(newarr.join(''))
}
