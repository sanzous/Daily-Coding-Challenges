function longest(s1, s2) {
    const arr = s1.concat(s2).split('');
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i])
        }
    } return newarr.sort().join('')

}