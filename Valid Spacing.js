function validSpacing(s) {
  return s.length === s.trim().length && s.split('  ').length < 2;
}
