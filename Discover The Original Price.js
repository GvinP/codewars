function discoverOriginalPrice(discountedPrice, salePercentage) {
  return (discountedPrice / (100 - salePercentage)) * 100;
}
