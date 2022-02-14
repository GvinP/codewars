function doubleChar(str) {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        s += str[i];
        s += str[i];
    }
    return s;
}
