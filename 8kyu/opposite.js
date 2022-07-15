function isOpposite(s1, s2) {
    console.log(s1, s2)
    if (s1 == '' && s2 == '') {
        return false
    }
    if (s1.length !== s2.length) {
        return false
    }
    if (s1.toUpperCase() !== s2.toUpperCase()) {
        return false
    }
    let ans = true
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            ans = false
        }
    }
    return ans
}