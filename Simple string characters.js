function solve(s) {
  return [/[A-Z]/, /[a-z]/, /\d/, /[\W|_]/].map(
    (rgx) => s.split(rgx).length - 1
  );
}
