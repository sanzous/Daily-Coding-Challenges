// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

//P - An array of arrays, each array will contain an element that is either _ , D , or @ . A variable to denote how many bags are available and a variable to denote how much things can go into one bag
//R - Clean if there is enough bags for every @, Crap if there isn't and then Dog if D is present.
//E - [['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean"
//P - First we create a variable called yard that will reduce the given arrays within the array into a single array
// Then we check if yard includes D if it does we return dog, if not we multiply bags by cap and then minus the product by the amount of
//Cr@p. if its greater than 0 then we return clean since there is leftover space, if not we return Cr@p


function crap(x, bags, cap) {
    const yard = x.reduce((a, b) => a.concat(b));
    return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter(val => val === '@').length > 0 ? 'Clean' : 'Cr@p';
}