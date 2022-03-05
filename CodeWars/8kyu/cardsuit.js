// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//Example -- 9♣ should return 
//Pseudo Code -- Take the last element of the string using slice and setting it to a new variable
// use a switch statement to return what the suit is depending on the last element.
function defineSuit(card) {
    var suit = card.substr(-1);
    switch (suit) {
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        default: return 'spades';
    }
}