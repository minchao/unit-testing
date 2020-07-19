export class Store {
  private inventory: Inventory = {
    [Product.Book]: 0,
    [Product.Shampoo]: 0,
  }

  public getInventory(product: Product): number {
    return this.inventory[product];
  }

  public addInventory(product: Product, quantity: number): void {
    this.inventory[product] = this.inventory[product] + quantity;
  }

  public removeInventory(product: Product, quantity: number): void {
    this.inventory[product] = this.inventory[product] - quantity;
  }

  public hasEnoughInventory(product: Product, quantity: number): boolean {
    return this.getInventory(product) >= quantity;
  }
}

export class Customer {
  public purchase(store: Store, product: Product, quantity: number): boolean {
    if (store.hasEnoughInventory(product, quantity)) {
      store.removeInventory(product, quantity);
      return true;
    }

    return false;
  }
}

type Inventory = Record<Product, number>;

export enum Product {
  Shampoo,
  Book,
}
