function triangle(row) {
    if(row.length === 1){
      return row
    }
    let colorCombos = {
      BG : 'R',
      GB : 'R',
      RG : 'B',
      GR : 'B',
      BR : 'G',
      RB : 'G',
    }
    function getNextRow(row){
      let nextRow = ''
      for(let i = 0; i < row.length - 1; i++){
      let firstLetter = row[i]
      let secondLetter = row[i + 1]
      if(firstLetter === secondLetter){
        nextRow += row[i]
      }else 
      nextRow += colorCombos[firstLetter + secondLetter]
      }
      if(nextRow.length > 1){
        return getNextRow(nextRow)
      }if(nextRow.length == 1){
        return nextRow
      }
    }
    return getNextRow(row)
  }