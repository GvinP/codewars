function totalCost(fees, savings, months, monthlyInterest) {
  if (fees <= savings) return fees;
  let procent = (fees - savings) * (monthlyInterest / 100);
  let sum = fees;
  for (let i = 0; i < months; i++) {
    sum += procent;
  }
  return sum;
}
