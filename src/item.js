function Item(name, sellIn, quality) {
  if (sellIn < 1) {
    throw new Error("'Sell In' number cannot be less than 1");
  } else if (quality > 50) {
    throw new Error("'Quality' cannot be more than 50");
  }
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}
