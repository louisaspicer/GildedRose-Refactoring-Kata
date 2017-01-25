"use strict";

function GildedRose() {
  this.items = [];
}

GildedRose.prototype = {

  _updateAgedBrie: function(index) {
    var quality = this.items[index].quality;
    if (quality <= 50) {
      this.items[index].quality += 1;
      this.items[index].sellIn -= 1;
    }
  },

  _updateBackstagePasses: function(index) {
    var sellIn = this.items[index].sellIn;
    var quality = this.items[index].quality;
    if (quality <= 50) {
      if (sellIn > 10) {
        this.items[index].quality += 1;
      } else if (sellIn <= 10 && sellIn > 5) {
        this.items[index].quality += 2;
      } else if (sellIn <= 5 && sellIn >= 0) {
        this.items[index].quality += 3;
      } else {
        this.items[index].quality = 0;
      }
    }
    this.items[index].sellIn -= 1;
  },

  _isQualityLessThanZero: function(index) {
    if (this.items[index].quality <= 0) {
      throw new Error("'Quality' has reached 0");
    }
  },

  _isSellInLessThanZero: function(index) {
    if (this.items[index].sellIn < 0) {
        this.items[index].quality -= 1;
    }
  },

  updateQuality: function() {
    for (var i = 0; i < this.items.length; i++) {
      this._isQualityLessThanZero(i);
      if (this.items[i].name === "Aged Brie") {
        this._updateAgedBrie(i);
      } else if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        this._updateBackstagePasses(i);
      } else if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn -= 1;
        this.items[i].quality -= 1;
      }
      this._isSellInLessThanZero(i);
    }
  }
};
