function meeting(s) {
    return s.split(';').map(el=>el.split(':').reverse().join(', ').toUpperCase()).sort().map(el=>`(${el})`).join('')
  }