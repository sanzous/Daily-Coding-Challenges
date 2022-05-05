var isSquare = function (n) {
    if (n < 0) {
        return false;
    }
    const newN = (Math.floor(Math.sqrt(n)))
    if (newN * newN == n) {
        return true;
    } else return false;
}