//P two integers that make up a chocolate bar with the dimensions of n x m
//R the amount of times that the chocolate bar can be split into small squares
//E if given 5 and 5 as parameters the return should be 24
//P Check to see if the given variables are valid and if they are see if they need more than 0 breaks We know that any square that is bigger than a 1x1 will require atleast one break.
// We can check if N or M are 0 since if either parameter is 0 the chocolate bar isnt a valid size.
// After we check the parameters to make sure it is a valid chocolate bar we then get the total size. We can create a new variable = to n times m and that will be the chocolate bar
// We know each square is 1x1 in size and we need the the amount of breaks needed before we have only 1x1 squares. All we would need to do is keep a count variable and then minus 1 from the total of n * m until 1
// as each square is a 1x1 in size. Once we reach 1 left the count is what will be returned. We can then simplify this by just subtracting 1 from the total of n * m since we will always have that 1 left over break
function breakChocolate(n,m) {
    return n * m <= 1 ? 0 : n * m - 1
    }