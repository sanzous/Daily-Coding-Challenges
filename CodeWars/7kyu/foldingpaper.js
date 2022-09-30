// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

function foldTo(distance) {
    if (distance < 0) { return null }
    let folds = 0.0001;
    let count = 0
    while (folds < distance) {
        folds = folds * 2
        count++
    } return count
}