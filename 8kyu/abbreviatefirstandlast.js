function abbrevName(name) {
    name = name.split(' ')
    return `${name[0][0].toUpperCase()}.${name[1][0].toUpperCase()}`
}