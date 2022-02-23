function sum (numbers) {
    return !numbers[0] ? 0 : numbers.reduce((s,n) => s+n);
};