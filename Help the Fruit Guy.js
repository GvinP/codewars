function removeRotten(bagOfFruits) {
  return (
    bagOfFruits?.map((fruit) => fruit.replace("rotten", "").toLowerCase()) || []
  );
}
