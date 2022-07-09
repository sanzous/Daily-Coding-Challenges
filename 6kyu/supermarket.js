const w = new Array(n).fill(0);
for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
}
return Math.max(...w);