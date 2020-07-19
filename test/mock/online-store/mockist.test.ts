import * as sinon from 'sinon';
import { Customer, Product, Store } from '../../../src/mock/online-store/store';

describe('Store - Mockist style', () => {
  it('Purchase succeeds when enough inventory', () => {
    // Arrange
    const store = new Store();
    const storeMock = sinon.mock(store);
    storeMock
      .expects('hasEnoughInventory')
      .once()
      .withArgs(Product.Shampoo, 5)
      .returns(true);
    storeMock
      .expects('removeInventory')
      .withArgs(Product.Shampoo, 5)
      .once();
    const customer = new Customer();

    // Act
    const success = customer.purchase(store, Product.Shampoo, 5);

    // Assert
    expect(success).toBe(true);
    storeMock.verify();
  });

  it('Purchase fails when not enough inventory', () => {
    // Arrange
    const store = new Store();
    const storeMock = sinon.mock(store);
    storeMock
      .expects('hasEnoughInventory')
      .once()
      .withArgs(Product.Shampoo, 15)
      .returns(false);
    storeMock
      .expects('removeInventory')
      .never();
    const customer = new Customer();

    // Act
    const success = customer.purchase(store, Product.Shampoo, 15);

    // Assert
    expect(success).toBe(false);
    storeMock.verify();
  });
});
