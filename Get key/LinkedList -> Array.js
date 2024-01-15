function listToArray(list) {
  let res = [list.value];
  let node = list.next;
  while (node) {
    res = [...res, node.value];
    node = node.next;
  }
  return res;
}
