function alternateCase(s) {
    return s.split('').map(l=>l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()).join('');
  }