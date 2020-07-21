# Gilded Rose

大家好，歡迎來到鍍金玫瑰團隊。我們只買賣最好的商品。不過每件商品都有一個銷售剩餘天數。隨著時間的推移，商品的品質會不斷下降。我們擁有一個可以更新庫存的系統。它是由一個名叫 Leeroy 的開發者所開發，這位開發者離開去涉足新領域了。

您的任務是將新功能添加到既有系統中，以便我們可以開始銷售新類別的商品。首先介紹我們的系統：

所有商品都有一個 `SellIn` 值，表示該商品必須在該值所代表的天數內銷售出去。所有商品都有 `Quality` 值，該值表示該商品當前的價值。

每天結束時，我們的系統都會降低每個商品的這兩個值，有趣的地方是：一但商品過了銷售剩餘天數之後還沒未賣出，商品價值下降的速度就會快兩倍，商品的價值絕不為負值。

另外，`Aged Brie` 的價值隨著時間增長而提高，而商品的價值永遠不會超過 50。`Sulfuras` 是一項傳奇產品，無需出售或降低價值。

`Backstage passes` 就像 `Aged Brie` 一樣，隨著 `SellIn` 值的減少而提高了價值；少於等於 10 天時，價值每天會提高 2；而少於等於 5 天時，價值會提高 3，但在音樂會後價值會下降到 0。

我們最近已經簽了一個 `conjured` 商品供應商。這需要對我們的系統進行更新：`conjured` 的價值下降速度是正常商品的兩倍。只要一切仍能正常運作，可以對 `UpdateQuality` 方法進行任何更改並添加任何新程式碼。

> 題目翻譯，部分參考了 [matt blog](https://mattlee-blog.com/2020/04/05/2020/gildedrose-factoring-kata/) 的譯文。

## 補上單元測試

請幫既有程式碼補上數個單元測試，並觀察測試覆蓋率的變化。

先來整理已知的規則：

 - 每天結束時系統都會降低商品的 `sellIn` 與 `quality` 值。
 - 一但商品超過 `sellIn` 天數後還沒賣出，`quality` 下降的速度就會快兩倍。
 - 商品的 `quality` 永遠不為負值。
 - 商品 `Aged Brie` 的 `quality` 每天都會提高，但 `quality` 永遠不超過 50。
 - 商品 `Backstage passes to a TAFKAL80ETC concert` 的 `quality` 也是每天都會提高，但是
   - `sellIn` 少於等於 10 天時，`quality` 每天會提高 2。
   - `sellIn` 少於等於 5 天時，`quality` 會提高 3。
   - 音樂會結束後（`sellIn` < 0）`quality` 會下降到 0
 - 商品 `Sulfuras, Hand of Ragnaros` 是一項傳奇產品，無需出售或降低價值。

單元測試程式碼：

[test/gilded-rose/gilded-rose.test.ts](../../test/gilded-rose/gilded-rose.test.ts)

執行單元測試：

```console
$ yarn run test-gilded-rose
```

覆蓋率報告路徑：

```
coverage/lcov-report/src/gilded-rose/gilded-rose.ts.html
```

## 參考

- https://github.com/emilybache/GildedRose-Refactoring-Kata
- [Jest Expect Doc](https://jestjs.io/docs/en/expect)
