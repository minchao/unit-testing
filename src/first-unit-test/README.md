# Calculator

> 若你不想使用 Docker，或 Docker 環境跑不起來，還有 [REPL](https://repl.it/@yaosiang/Calculator) 可用喔。

我們有個計算器類別叫做 [Calculator](calculator.ts)，它提供一個 Sum 方法，當輸入兩個浮點數後，會輸出浮點數的總和。
單元測試簡單地示範如何測試這個方法。

## 練習

請試著為 Calculator 添加 multiply 方法，並為它添加單元測試。

單元測試程式碼：

[test/first-unit-test/calculator.test.ts](../../test/first-unit-test/calculator.test.ts)

執行單元測試：

```console
$ yarn run test-first-unit-test
```

覆蓋率報告路徑：

```
coverage/lcov-report/src/first-unit-test/calculator.ts.html
```
