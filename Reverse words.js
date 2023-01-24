function reverseWords(str) {
    str = str.split(' ');
    str = str.map((e) => e.split('').reverse().join(''));
    str = str.join(' ');
    return str;
}