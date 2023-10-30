function well(x) {
  switch (
    x.flat().filter((w) => w.toString().toLowerCase() === 'good').length
  ) {
    case 0:
      return 'Fail!';
    case 1:
    case 2:
      return 'Publish!';
    default:
      return 'I smell a series!';
  }
}
