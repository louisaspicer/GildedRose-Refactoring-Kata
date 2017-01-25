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
      gildedRose._agedBrie(0);
      expect(gildedRose.items[0].quality).toEqual(6);
    });

    it("decreases sellIn number by 1", function() {
      gildedRose._agedBrie(0);
      expect(gildedRose.items[0].sellIn).toEqual(1);
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
