multiplicationTable = function (size) {
    let newarr = [];
    for (let i = 1; i <= size; i++) {
        let temparr = [];
        for (let j = 1; j <= size; j++) {
            temparr.push(i * j)
        }
        newarr.push(temparr)
    } return newarr
}
