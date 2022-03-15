function isIsogram(str) {
    console.log(str);
    if (str.length == 0) {
        return true;
    }
    let isogram = true;
    const iso = Array.from(str.toLowerCase())
    for (let i = 0; i < iso.length; i++) {
        for (let j = 0; j < iso.length; j++) {
            if (i != j) {
                if (iso[i] === iso[j]) {
                    isogram = false;
                }
            }
        }
    } return isogram
}