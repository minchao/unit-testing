import { Item, GildedRose } from '../../src/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].name).toEqual('foo');
  });
});
