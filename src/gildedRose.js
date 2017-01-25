"use strict";

function GildedRose(itemKlass) {
  this.items = [];
  this.item = itemKlass;
}

GildedRose.prototype = {

  addNewItem: function(name, sellIn, quality) {
    this.items.push(new this.item(name, sellIn, quality));
  },

  updateQuality: function() {
    for (var i = 0; i < this.items.length; i++) {
      this._checkQualityLessThanZero(i);
      this._checkItemType(i);
      this._checkSellInLessThanZero(i);
    }
  },

  _checkItemType: function(index) {
    if (this.items[index].name === "Aged Brie") {
      this._updateAgedBrie(index);
    } else if (this.items[index].name === "Backstage passes to a TAFKAL80ETC concert") {
      this._updateBackstagePasses(index);
    } else if (this.items[index].name != "Sulfuras, Hand of Ragnaros") {
      this.items[index].sellIn -= 1;
      this.items[index].quality -= 1;
    }
  },

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

  _checkQualityLessThanZero: function(index) {
    if (this.items[index].quality <= 0) {
      throw new Error("'Quality' has reached 0");
    }
  },

  _checkSellInLessThanZero: function(index) {
    if (this.items[index].sellIn < 0) {
        this.items[index].quality -= 1;
    }
  },

};
