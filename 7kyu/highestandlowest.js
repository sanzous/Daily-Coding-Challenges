function highAndLow(numbers) {
    numbers = numbers.split(' ').map(e => Number(e)).sort((a, b) => a - b)
    return `${numbers[numbers.length - 1]} ${numbers[0]}`
}