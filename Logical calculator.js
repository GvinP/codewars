function logicalCalc(array, op) {
  switch (op) {
    case 'AND':
      return array.reduce((acc, el) => (acc = acc && el));
    case 'OR':
      return array.reduce((acc, el) => (acc = acc || el));
    case 'XOR':
      return array.reduce((acc, el) => (acc = acc != el));
  }
}
