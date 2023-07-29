function swap (string) {
    return string.split('').map(l=> ['a','e','u','i','o'].includes(l)?l.toUpperCase():l).join('');
  }