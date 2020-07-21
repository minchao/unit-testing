export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public upgradeNormal(): void {
    this.sellIn = this.sellIn - 1;
    this.decreaseQuality();
    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
  }

  public upgradeBackstagePasses(): void {
    this.sellIn = this.sellIn - 1;
    this.increaseQuality();
    if (this.sellIn < 10) {
      this.increaseQuality();
    }
    if (this.sellIn < 5) {
      this.increaseQuality();
    }
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }

  public upgradeAgedBrie(): void {
    this.sellIn = this.sellIn - 1;
    this.increaseQuality();
    if (this.sellIn < 0) {
      this.increaseQuality();
    }
  }

  public decreaseQuality(): void {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }

  public increaseQuality(): void {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  public updateQuality(): Item[] {
    this.items.forEach(item => {
      this.updateItem(item);
    });

    return this.items;
  }

  private updateItem(item: Item): void {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    if (item.name === 'Aged Brie') {
      item.upgradeAgedBrie();
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      item.upgradeBackstagePasses();
    } else {
      item.upgradeNormal();
    }
  }
}
