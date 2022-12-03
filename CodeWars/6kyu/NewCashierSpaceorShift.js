// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

//P - a string containing menu items but with no spaces
//R - the same string but with each menu item capitalized correctly, spaced, and sorted according to the menu item that is provided
//E - getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"), "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke")
//P - First we declare a variable(currentWord) to hold the currentWord as we iterate throught the string. an order variable to hold all the words we find
// a menu to check if the currentWord exists in the menu and then a correct Menu object with the menus order
// We then create a for loop and we add to the currentWord variable the current element
// We then check if curentWord is inside the menu, if it is we first capitalize the first letter and then push that word to the order variable.
// We then reset currentword to an empty string
// once we get complete order we then sort it using the correct menu object and then use the join method with a space.
function getOrder(input) {
    let currentWord = ''
    let order = []
    let menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
    let correctMenu = {
        'Burger': 1,
        'Fries': 2,
        'Chicken': 3,
        'Pizza': 4,
        'Sandwich': 5,
        'Onionrings': 6,
        'Milkshake': 7,
        'Coke': 8
    }
    for (let i = 0; i < input.length; i++) {
        currentWord += input[i]
        if (menu.includes(currentWord)) {
            let firstLetter = currentWord[0].toUpperCase()
            order.push(firstLetter += currentWord.slice(1))
            currentWord = ''
        }
    } return order.sort((a, b) => correctMenu[a] - correctMenu[b]).join(' ')
}