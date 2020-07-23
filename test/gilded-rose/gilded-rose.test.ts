import { Item, GildedRose } from '../../src/gilded-rose';

describe('Gilded Rose', () => {
  it('item name should not be changed', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toEqual('foo');
  });

  it('quality never is negative', () => {
    // fill the missing code
  });

  it('sulfuras could not be sold', () => {
    // const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 0)];
  });

  it('sulfuras could not decrease quality', () => {
    // const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 10)];
  });

  it('quality could not be more than fifty', () => {
    // fill the missing code
  });

  it('item with date passed quality decrease', () => {
    // const items = [new Item('foo', 10, 40)];
  });

  it('item with date passed quality decrease by twice', () => {
    // const items = [new Item('foo', -1, 40)];
  });

  it('aged brie increase quality when it gets older', () => {
    // const items = [new Item('Aged Brie', 1, 40)];
  });

  it('aged brie increase by two quality when date passed', () => {
    // const items = [new Item('Aged Brie', -1, 40)];
  });

  it('aged brie increase by two quality when date passed and not more than fifty', () => {
    // const items = [new Item('Aged Brie', -1, 50)];
  });

  it('backstage passes increase quality by two when sellin less than ten', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)];
  });

  it('backstage passes increase quality by two when sellin less than six', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 40)];
  });

  it('backstage passes increase quality by three when sellin less than five', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)];
  });

  it('backstage passes increase quality by two when sellin less than six and not more than fifty', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)];
  });

  it('backstage passes increase quality by three when sellin less than five and not more than fifty', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)];
  });

  it('backstage passes quality drops to zero after concert', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)];
  });

  it('backstage passes quality increase quality by one when date is more than 10', () => {
    // const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 11, 40)];
  });
});
