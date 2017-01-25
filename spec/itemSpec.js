describe("Item", function() {

  var item;

  beforeEach(function() {
    item = new Item("Aged Brie", 1, 0);
  });

  it("has a name", function() {
    expect(item.name).toEqual("Aged Brie");
  });

  it("has a 'Sell-In' number", function() {
    expect(item.sellIn).toEqual(1);
  });

  it("has a 'Quality' number", function() {
    expect(item.quality).toEqual(0);
  });

  describe("Edge cases", function() {

    it("cannot be given a initial quality of more than 50", function() {
      expect(function() {item = new Item("test", 1, 51); }).toThrowError("'Quality' cannot be more than 50");
    });

  });


});
