function mygcd(x, y) {
    let xdivisor = [];

    for (let i = 0; i <= x / 2; i++) {
        if (x % i == 0) {
            xdivisor.push(i);
        }
    }
    return +xdivisor.filter(e => y % e === 0).pop() || 1
}