function capital(capitals) {
  return capitals.map((state) =>`The capital of ${state['state'] ?? state['country']} is ${state['capital']}`);
}
