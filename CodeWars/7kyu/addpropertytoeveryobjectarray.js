//P - no parameter but a already predefined array with a set of objects
//R - the array with each object having been appended to it a new value called userAnswer set to null
//E - var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
//P - we can use the forEach method on the given array and inside the forEach method we can
// set a function that takes in the current element and in each function each element will add a new object propery user answer equal to null

questions.forEach(function (q) {
    q.usersAnswer = null
})