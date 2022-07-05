function howMuchILoveYou(nbPetals) {
    const quotes = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    if (nbPetals % 6 === 0) {
        return quotes[5];
    } else return quotes[Math.ceil(nbPetals % 6) - 1];


}