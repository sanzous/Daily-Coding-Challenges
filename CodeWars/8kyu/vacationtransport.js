function rentalCarCost(d) {
    if (d >= 7) {
        return (d * 40) - 50
    } else if (d >= 3) {
        return (d * 40) - 20
    } else return d * 40
}