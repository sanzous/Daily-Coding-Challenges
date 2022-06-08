function solution(str, ending) {
    if (str === ending) {
        return true
    } else if (ending === '') {
        return true
    } else
        return str.slice(-(ending.length)) == ending
}