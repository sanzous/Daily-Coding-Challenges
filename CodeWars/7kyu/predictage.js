function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b, c) => b + c)) / 2)
}