/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let remainingFlowers = n
    if(flowerbed.length == 1 && flowerbed[0] === 0){
        return true
    }
    if(flowerbed[0] == 0 && flowerbed[1] == 0){
        remainingFlowers--
        if(remainingFlowers <= 0){
            return true
        }
        flowerbed[0] = 1
        }
    for(let i = 1; i < flowerbed.length; i++){
        if(flowerbed[i - 1] === 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0 ){
            remainingFlowers--
            if(remainingFlowers <= 0){
            return true
        }
            flowerbed[i] = 1
        }
    }
    if(flowerbed[flowerbed.length - 2] == 0 && flowerbed[flowerbed.length - 1] == 0){
        remainingFlowers--
        flowerbed[flowerbed.length - 1] = 1
    }
    console.log(flowerbed)
    return remainingFlowers <= 0
};