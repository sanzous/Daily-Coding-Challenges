function index(array, n) {
    if (n > array.length - 1) { return -1; }
    else { return Math.pow(array[n], n); }
}