function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) {
        return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
    } else {
        return -1;
    }
}