function titleCase(title, minorWords) {
    return title.split(' ').map((w,i)=>minorWords?.toLowerCase().split(' ').includes(w.toLowerCase())&&i!==0?w.toLowerCase():w?.split('').map((l,i)=>i===0?l.toUpperCase():l.toLowerCase()).join('')).join(' ');
  }
  