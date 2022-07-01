function capitalize(s) {
    let even = [...s]
    let odd = [...s]
    for (let i = 0; i < even.length; i++) {
        if (i % 2 == 0 || i == 0) {
            odd[i] = odd[i].toUpperCase()
        } else even[i] = even[i].toUpperCase()
    } return [odd.join(''), even.join('')]
};