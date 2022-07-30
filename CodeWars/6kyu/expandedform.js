// You will be given a number and you will need to return it as a string in Expanded Form.

function expandedForm(num) {
    let expanded = []
    num = num.toString().split('').map(e => Number(e))
    let count = num.length - 1
    for (let i = 0; i < num.length; i++) {
        num[i] = num[i] * (Math.pow(10, count))
        expanded.push(num[i])
        count--
    } return expanded.filter(e => e !== 0).join(' + ')
}