function check(a, x) {
    let answer = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        answer = true;
      }
    }
    return answer;
  }