function dontGiveMeFive(start, end) {

    //count to keep count of numbers
    let count = 0;
    for (let i = start; i <= end; i++) {
        //turn i which equals the numbers from start to end into a string and check if it has 5 by using indexOF
        //if the statement returns true then increase count
        if ((i + '').indexOf('5') == -1) {
            count++
        }
    } return count;
}