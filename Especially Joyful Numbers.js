function numberJoy(n) {
    const sum = n.toString().split('').reduce((a,b)=> a + +b, 0);
    return sum * +sum.toString().split('').reverse().join('') === n;
}