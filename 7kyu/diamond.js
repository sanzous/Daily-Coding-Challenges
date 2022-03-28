function diamond(n) {
    if (n % 2 === 0 || n < 2) { return null; }

    let diam;
    for (let i = n; i > 0; i = i - 2) {
        let row = ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
        diam = (i === n) ? row : row + diam + row;
    }
    return diam;
}