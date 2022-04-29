function findNeedle(haystack) {
    return haystack.includes('needle') ? 'found the needle at position ' + haystack.indexOf('needle') : false;
}