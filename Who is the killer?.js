function killer(suspectInfo, dead) {
  let killer = '';
  for (let i = 0; i < Object.keys(suspectInfo).length; i++) {
    for (let key in suspectInfo) {
      if (dead.every((x) => suspectInfo[key].includes(x))) {
        killer = key;
      }
    }
    return killer;
  }
}
