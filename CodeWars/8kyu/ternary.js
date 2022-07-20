function saleHotdogs(n) {
    return n >= 10 ? n * 90 : n >= 5 && n < 10 ? n * 95 : n < 5 ? n * 100 : false
}