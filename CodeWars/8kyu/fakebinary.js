function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}