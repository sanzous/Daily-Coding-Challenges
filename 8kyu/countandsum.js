function countPositivesSumNegatives(input) {
    if (input == null) {
        return [];
    }
    if (input.isArray == false) {
        return [];
    }
    let positive = 0;
    let negative = 0;

    if (input.length == null) {
        return [];
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positive++
        } else
            negative += input[i]
    }
    if (positive == 0 && negative == 0) {
        return [];
    } else
        return [positive, negative]
}