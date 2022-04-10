function sum(numbers) {
    return numbers.length == 0 ? 0 : numbers.reduce((p, c) => p + c, 0);
};