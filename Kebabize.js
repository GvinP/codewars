function kebabize(str) {
    return str.split('').filter(l=>!isFinite(+l)).map((l,i)=> l.charCodeAt()<97 ? `${i === 0 ? '' : '-'}` + l.toLowerCase():l).join('');
  }