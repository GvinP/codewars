function htmlspecialchars(formData) {
  const simbols = { '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' };
  return formData.split('').map((x) => simbols[x] ?? x).join('');
}
