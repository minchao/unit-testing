import { Item, GildedRose } from '../../src/gilded-rose';

// ref: https://gist.github.com/adelatorrefoss/ebc658b3e0054913dced80c8fe384de0
describe('Gilded Rose', () => {
  it('should foo', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toEqual('foo');
  });

  it('quality never is negative', () => {
    const items = [new Item('foo', 0, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it('sulfuras could not be sold', () => {
    const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].sellIn).toEqual(10);
  });

  it('sulfuras could not decrease quality', () => {
    const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(10);
  });

  it('quality could not be more than fifty', () => {
    const items = [new Item('Aged Brie', 10, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(50);
  });

  it('item with date passed quality decrease', () => {
    const items = [new Item('foo', 10, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(39);
  });

  it('item with date passed quality decrease by twice', () => {
    const items = [new Item('foo', -1, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(38);
  });

  it('aged brie increase quality when it gets older', () => {
    const items = [new Item('Aged Brie', 1, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(41);
  });

  it('aged brie increase by two quality when date passed', () => {
    const items = [new Item('Aged Brie', -1, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(42);
  });

  it('aged brie increase by two quality when date passed and not more than fifty', () => {
    const items = [new Item('Aged Brie', -1, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(50);
  });

  it('backstage passes increase quality by two when sellin less than ten', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(42);
  });

  it('backstage passes increase quality by two when sellin less than six', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(42);
  });

  it('backstage passes increase quality by three when sellin less than five', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(43);
  });

  it('backstage passes increase quality by two when sellin less than six and not more than fifty', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(50);
  });

  it('backstage passes increase quality by three when sellin less than five and not more than fifty', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(50);
  });

  it('backstage passes quality drops to zero after concert', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it('backstage passes quality increase quality by one when date is more than 10', () => {
    const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 11, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(41);
  });
});
