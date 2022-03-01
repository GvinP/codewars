function twoSort(s) {
    s.sort();
    let i = s[0];
    i = i.split('');
    for (let j = 0; j < i.length-1; j++) {
        i[j] += "***"
    }
    i = i.join("");
    return i;
}