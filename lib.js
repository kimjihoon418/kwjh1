function avg(n) {
    return n.reduce((a, b) => a + b, 0) / n.length;
}

function prime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
}

module.exports = { avg, prime, factorial };
