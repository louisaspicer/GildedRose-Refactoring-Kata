"use strict";

function GildedRose() {
  this.items = [];
}

GildedRose.prototype = {

  _updateAgedBrie: function(index) {
    this.items[index].quality += 1;
    this.items[index].sellIn -= 1;
  },

  _updateBackstagePasses: function(index) {
    var sellIn = this.items[index].sellIn;
    if (sellIn > 10) {
      this.items[index].quality += 1;
    } else if (sellIn <= 10 && sellIn > 5) {
      this.items[index].quality += 2;
    } else if (sellIn <= 5 && sellIn >= 0) {
      this.items[index].quality += 3;
    } else {
      this.items[index].quality = 0;
    }
    this.items[index].sellIn -= 1;
  },

  updateQuality: function() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].quality === 0) {
        throw new Error("'Quality' has reached 0");
      } else if (this.items[i].name === "Aged Brie") {
        this._updateAgedBrie(i);
      } else if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        this._updateBackstagePasses(i);
      } else {
        this.items[i].sellIn -= 1;
        this.items[i].quality += 1;
      }
    }
  }
};
