describe("GildedRose", function() {
  var gildedRose;

  beforeEach(function() {
    gildedRose = new GildedRose();
  });

  it("has an items property", function() {
    expect(gildedRose.items).toEqual([]);
  });

  describe("Aged Brie", function() {

    beforeEach(function() {
      var item = {name: "Aged Brie", sellIn: 2, quality: 5};
      gildedRose.items = [item];
    });

    it("increases quality by 1", function() {
      gildedRose._updateAgedBrie(0);
      expect(gildedRose.items[0].quality).toEqual(6);
    });

    it("decreases sellIn number by 1", function() {
      gildedRose._updateAgedBrie(0);
      expect(gildedRose.items[0].sellIn).toEqual(1);
    });
  });

  describe("Backstage Passes", function() {

    describe("SellIn number is more than 10", function() {

      beforeEach(function() {
        var item = {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 5};
        gildedRose.items = [item];
      });

      it("increases quality by 1", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].quality).toEqual(6);
      });

      it("decreases sellIn by 1", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].sellIn).toEqual(10);
      });
    });

    describe("SellIn number is less than 10 but more than 5", function() {

      beforeEach(function() {
        var item = {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 8, quality: 5};
        gildedRose.items = [item];
      });

      it("increases quality by 2", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].quality).toEqual(7);
      });

      it("decreases sellIn by 1", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].sellIn).toEqual(7);
      });
    });
  });

  describe("Update Quality", function() {

    beforeEach(function() {
      var item = {name: "Aged Brie", sellIn: 2, quality: 5};
      gildedRose.items = [item];
    });

    it("updates the Aged Brie item", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(6);
    });

  });




});
