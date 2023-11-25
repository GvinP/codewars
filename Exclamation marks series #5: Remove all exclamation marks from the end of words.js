function remove(string) {
  const array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    while (array[i].endsWith('!')) {
      const arr = array[i].split('');
      arr.length = arr.length - 1;
      array[i] = arr.join('');
    }
  }
  return array.join(' ');
}
