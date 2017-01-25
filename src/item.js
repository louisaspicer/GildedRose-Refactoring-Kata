function Item(name, sellIn, quality) {
  if (quality > 50) {
    throw new Error("'Quality' cannot be more than 50");
  }
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}
