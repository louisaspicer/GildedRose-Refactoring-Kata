describe("GildedRose", function() {
  var gildedRose;

  beforeEach(function() {
    gildedRose = new GildedRose();
    // item = jasmine.createSpyObj('item', ['name']);
  });

  it("has an items property", function() {
    expect(gildedRose.items).toEqual([]);
  });

  describe("Aged Brie", function() {
    it("increases quality by 2", function() {
      var item = {name: "Aged Brie", sellIn: 2, quality: 5};
      gildedRose.items = [item];
      gildedRose._agedBrie();
      expect(gildedRose.items[0].quality).toEqual(7);
    });
  });



});
