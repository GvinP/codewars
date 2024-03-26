function tripleTrouble(one, two, three) {
  return one.split('').map((x, i) => x + two[i] + three[i]).join('');
}
