function ipToInt32(ip) {
  return ip.split('.').reduce((acc, el) => (acc = acc * 256 + +el));
}
