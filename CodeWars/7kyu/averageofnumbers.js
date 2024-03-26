function averages(numbers) {
    if(numbers == null){
      return []
    }
    let avgArray = []
    for(let i = 0; i < numbers.length - 1; i++){
      avgArray.push((numbers[i] + numbers[i + 1]) / 2)
    }
    return avgArray
  }