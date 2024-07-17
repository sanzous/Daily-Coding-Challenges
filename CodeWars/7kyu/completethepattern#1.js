function pattern(n){
    let ans = []
    for (let i = 1; i <= n; i++){
      ans.push(i.toString().repeat(i))
    }
    return ans.join('\n')
  }