const sequenceSum = (begin, end, step) => {
    let seq = []
    while (begin <= end) {
        seq.push(begin)
        begin = begin + step
    } return seq.reduce((p, c) => p + c, 0)
};