var number = function (busStops) {
    let passin = 0;
    let passout = 0;
    for (let i = 0; i < busStops.length; i++) {
        passin += busStops[i][0]
        passout += busStops[i][1]
    } return passin - passout
}