# 練習

## 題目

你需要幫一個駕照號碼產生器撰寫測試，而駕照號碼產生是有下列規則的：

1. 只有 18 歲以上成年人才可以領取駕照。
2. 一個人只能領取一次駕照。
3. 駕照號碼的格式如下：

```
名字的起首字母+MMDDYYYY   +  隨機碼
---------------------     ------
          a                 b
```

4. 15 減去 a 的長度為 b 的長度，但是 b 的長度最少會有 4 個字。

## 要求

在不使用任何 Mock 工具的情況下，完成以下要求：

1. 使用 Stub 來測試不同年齡的應徵者，以及重複的應徵者。
2. 使用 Spy 來測試 logger 是否被確實呼叫。
3. 使用 Mock 來模擬產生隨機碼。

單元測試程式碼：

[test/mock/driving-licence/driving-licence-generator.test.ts](../../../test/mock/driving-licence/driving-licence-generator.test.ts)

執行單元測試：

```console
$ yarn run test-driving-licence
```

覆蓋率報告路徑：

```
coverage/lcov-report/src/mock/driving-licence/index.html
```
