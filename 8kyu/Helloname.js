function hello(name) {
    if (name) {
        name = name.toLowerCase();
        name = name.split('')
        name[0] = name[0].toUpperCase()
        name = name.join('')

    }
    return name ? `Hello, ${name}!` : `Hello, World!`;
}