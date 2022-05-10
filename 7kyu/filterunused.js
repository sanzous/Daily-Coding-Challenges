function unusedDigits() {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let args = [...arguments];
    args = args.join('').split('');
    return nums.filter(e => !args.includes(e)).join('')







}