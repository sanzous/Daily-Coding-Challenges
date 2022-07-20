function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}