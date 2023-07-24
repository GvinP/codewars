function stringTransformer(str) {
    return str.split(' ').reverse().map(w=> w.split('').map(l=>l.charCodeAt()<96?l.toLowerCase(): l.toUpperCase()).join('')).join(' ');
  }