describe("Item", function() {

  var item;

  beforeEach(function() {
    item = new Item("Aged Brie", 1, 0);
  });

  it("has a name", function() {
    expect(item.name).toEqual("Aged Brie");
  });

  it("cannot be given a Sell In number less than 1", function() {
    expect(function(){ item = new Item("test", 0, 0); }).toThrowError("'Sell In' number cannot be less than 1");
  });

});
