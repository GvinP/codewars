function splitAndMerge(string, separator) {
  return string.replace(/\S(?=\S)/gi, `$&${separator}`);
}
