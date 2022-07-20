var countSheep = function (num){
  let ans = []
  for(let i = 1; i <= num; i++){
    ans.push(`${i} sheep...`)
  }return ans.join('')
}