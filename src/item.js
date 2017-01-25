function Item(name, sellIn, quality) {
  if (sellIn < 1) {
    throw new Error("'Sell In' number cannot be less than 1");
  }
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}
