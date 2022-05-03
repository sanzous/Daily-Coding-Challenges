function barista(coffees) {
    //TODO: Maths are cool!

    // 0 + 2 + 4 + 6 + 8
    // 0 + 2(1) + 2(2) + 2(3) + 2(4)

    var sum = 0;
    var coffees = coffees.sort(function (a, b) { return a - b; });
    console.log(coffees);
    coffees.reduce(
        (previousValue, currentValue, currentIndex) => {
            var waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
            console.log(waitTime);
            sum += waitTime;
            return waitTime;
        }, 0);
    return sum;
}