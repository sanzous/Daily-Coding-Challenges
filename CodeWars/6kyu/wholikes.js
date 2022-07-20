function likes(names) {
    if (names.length == 0) {
        return 'no one likes this'
    } else if (names.length == 1) {
        return `${names} likes this`
    } else if (names.length == 2) {
        names == [...names]
        return (`${names[0]} and ${names[1]} like this`)
    } else if (names.length == 3) {
        names == [...names]
        return (`${names[0]}, ${names[1]} and ${names[2]} like this`)
    } else if (names.length >= 4) {
        names == [...names]
        let arr = names.splice(0, 2)
        return (`${arr[0]}, ${arr[1]} and ${names.length} others like this`)
    }
}