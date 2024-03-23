function halvingSum(n) {
    let totalSum = 0
    let currentNum = n
    let divisor = 1
   while(currentNum > 0){
     totalSum += currentNum
     divisor *= 2    
     currentNum = Math.floor(n/divisor)
   }
  return totalSum
}
