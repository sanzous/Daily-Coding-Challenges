function longestConsec(strarr, k) {

    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return "";
    }
    let newstrarr = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
        let newword = [];
        for (let j = 0; j < k; j++) {
            newword += strarr[i + j]


        } newstrarr.push(newword)

    }
    //returns first longest word
    return newstrarr.reduce((r, e) => r.length < e.length ? e : r, "");
}