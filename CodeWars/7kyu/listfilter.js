function filter_list(l) {
    return l.filter(e => typeof e !== 'string')
}