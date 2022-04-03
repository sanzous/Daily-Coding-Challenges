function arrAdder(arr) {
    let newarr = [];
    for (let i = 0; i < arr[0].length; i++) {
        let temparr = [];
        for (let j = 0; j < arr.length; j++) {
            temparr.push(arr[j][i]);
        }
        newarr.push(temparr.join(''));
    }
    return newarr.filter(e => e !== '').join(' ')
}