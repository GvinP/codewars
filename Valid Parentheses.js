function validParentheses(parenStr) {
  const reg = /\(\)/g;
  while (reg.test(parenStr)) {
    parenStr = parenStr.replace(reg, '');
  }

  return parenStr === '';
}
