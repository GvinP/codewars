function encode(string) {
    const hash = {a: 1, e: 2, i: 3, o: 4, u: 5};
    return string.split("").map(el=> hash[el] || el).join("");
  }
  
  function decode(string) {
    const hash = {"1": "a", "2": "e", "3": "i", "4": "o", "5": "u"};
    return string.split("").map(el=> hash[el] || el).join("");
  }