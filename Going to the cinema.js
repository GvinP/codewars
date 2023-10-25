function movie(card, ticket, perc) {
  let costA = (n = 0);
  let costB = card;
  while (Math.ceil(costB) >= costA) {
    costA += ticket;
    costB += ticket * Math.pow(perc, ++n);
  }
  return n;
}
