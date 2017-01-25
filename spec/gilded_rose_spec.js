describe("Gilded Rose", function() {

  it("does not change the name of item", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("oo");
  });

});
