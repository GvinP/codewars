function drawSpider(legSize, bodySize, mouth, eye) {
  const arrOfLegsLeft = ['', '^', '/\\', '/╲', '╱╲'];
  const arrofLegsRight = ['', '^', '/\\', '╱\\', '╱╲'];
  const arrOfbodyleft = ['', '(', '((', '((('];
  const arrOfBodyRight = ['', ')', '))', ')))'];
  const eyes = [];
  for (let i = 0; i < 2 ** bodySize / 2; i++) {
    eyes.push(eye);
  }
  const eyesforReal = eyes.join('');
  return `${arrOfLegsLeft[legSize]}${arrOfbodyleft[bodySize]}${eyesforReal}${mouth}${eyesforReal}${arrOfBodyRight[bodySize]}${arrofLegsRight[legSize]}`;
}
