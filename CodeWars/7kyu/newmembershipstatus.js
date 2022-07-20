function openOrSenior(data) {
    return data.reduce((p, c) => c[0] >= 55 && c[1] > 7 ? [...p, 'Senior'] : [...p, 'Open'], [])
}