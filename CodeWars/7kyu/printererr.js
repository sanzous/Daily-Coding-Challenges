function printerError(s) {
    let errors = 0
    let count = 0
    const bad = 'nopqrstuvwxyz'
    for (let i = 0; i < s.length; i++) {
        count++
        if (bad.includes(s[i])) {
            errors++

        }
    } return errors + '/' + count
}