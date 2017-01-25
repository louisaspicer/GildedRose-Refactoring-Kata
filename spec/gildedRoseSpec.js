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

    describe("SellIn number is 5 or less", function() {

      beforeEach(function() {
        var item = {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 5};
        gildedRose.items = [item];
      });

      it("increases quality by 2", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].quality).toEqual(8);
      });

      it("decreases sellIn by 1", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].sellIn).toEqual(4);
      });
    });

    describe("SellIn number is less than 0", function() {

      beforeEach(function() {
        var item = {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 5};
        gildedRose.items = [item];
      });

      it("Quality drops to 0", function() {
        gildedRose._updateBackstagePasses(0);
        expect(gildedRose.items[0].quality).toEqual(0);
      });
    });

  });

  describe("Update Quality", function() {

    describe("Brie", function() {
      it("updates the Aged Brie item", function() {
        var item = {name: "Aged Brie", sellIn: 2, quality: 5};
        gildedRose.items = [item];
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(6);
      });
    });

    describe("Backstage Passes", function() {
      it("updates the backstage pass item", function() {
        var item = {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 12, quality: 5};
        gildedRose.items = [item];
        gildedRose.updateQuality();
        expect(gildedRose.items[0].quality).toEqual(6);
      });

    });

  });




});
