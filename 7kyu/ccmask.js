function maskify(cc) {
    const masked = [...cc];
    for (let i = 0; i < masked.length - 4; i++) {
        masked[i] = '#';
    } return masked.join('');
}