var humanYearsCatYearsDogYears = function (humanYears) {
    let human = humanYears
    let cat = 0;
    let dog = 0;
    for (let i = 1; i <= humanYears; i++) {
        if (i == 1) {
            cat += 15
            dog += 15
        } if (i == 2) {
            cat += 9
            dog += 9
        } if (i > 2) {
            cat += 4
            dog += 5
        }
    } return [human, cat, dog]
}
