function removeSmallest(numbers) {
    if (numbers == [] || numbers.length == 1) {
        return [];
    } else {
        let mini = Math.min(...numbers)
        return numbers.filter((e, i) => i !== numbers.indexOf(mini))
    }
}