//P - an array of 3 integers instanced in a class
//R - a new object created from a Block class and the provided methods with the correct return
//E -   let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2

//     b.getLength() // -> 4

//     b.getHeight() // -> 6

//     b.getVolume() // -> 48

//     b.getSurfaceArea() // -> 88
//P - In the constructor that the data is being passed into we set the variables of
// width, length and height using the this keyword. Since we know width will always be first,
// length will always be 2nd and height will always be 3rd we can set the variables to the corresponding array
// index
// We then set a method for each variable to return and the correct formula for the volume and surface area
class Block {

    constructor(data) {
        this.width = data[0]
        this.length = data[1]
        this.height = data[2]
    }

    getWidth() {
        return this.width
    }

    getLength() {
        return this.length
    }

    getHeight() {
        return this.height
    }

    getVolume() {
        return this.width * this.length * this.height
    }

    getSurfaceArea() {
        return 2 * ((this.length * this.width) + (this.width * this.height) + (this.length * this.height))
    }
}