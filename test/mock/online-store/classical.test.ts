import { Customer, Product, Store } from '../../../src/mock/online-store/store';

describe('Store - Classical style', () => {
  it('Purchase succeeds when enough inventory', () => {
    // Arrange
    const store = new Store();
    store.addInventory(Product.Shampoo, 10);
    const customer = new Customer();

    // Act
    const success = customer.purchase(store, Product.Shampoo, 5);

    // Assert
    expect(success).toBe(true);
    expect(store.getInventory(Product.Shampoo)).toEqual(5);
  });

  it('Purchase fails when not enough inventory', () => {
    // Arrange
    const store = new Store();
    store.addInventory(Product.Shampoo, 10);
    const customer = new Customer();

    // Act
    const success = customer.purchase(store, Product.Shampoo, 15);

    // Assert
    expect(success).toBe(false);
    expect(store.getInventory(Product.Shampoo)).toEqual(10);
  });
});
