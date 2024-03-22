//P We are given an integer which will represent the amount of eggs that will be cooked
//R We need to return how much total small amount of time will be needed to cook all of the eggs
//E (5) eggs will return 5mins as a batch can hold 8 total and it takes 5 minutes to cook one batch,  (10) will return 10 minutes as one batch can only hold 8 so the extra 2 will take an
//additional 5 extra minutes to cook
//P first we create a new variable to keep track of how many batches of eggs were cooked. We can then create a while loop where while the total amount of eggs is greater than 0,
// We will increase the batches cooked by 1 and reduce the eggs to be cooked by 8 as that is how many eggs can be cooked at one time. Once the loop finishes we then return the 
// total batches that were cooked times 5 as each batch takes 5 minutes to cook.


function cookingTime(eggs) {
    let totalEggs = Number(eggs)
    let totalBatches = 0
    while(totalEggs > 0){
      totalBatches += 1
      totalEggs -= 8
      
    }
    return totalBatches * 5
  }