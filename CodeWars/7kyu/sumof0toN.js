// We want to generate a function that computes the series starting from 0 and ending until the given number.

var SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count == 0) return '0=0'
        if (count < 0) return `${count}<0`
        let ans = []
        for (let i = 0; i <= count; i++) {
            ans.push(i)
        } return ans.join('+') + ' = ' + ans.reduce((p, c) => p + c)
    };

    return SequenceSum;

})();