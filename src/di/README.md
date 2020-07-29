# 練習

> 若你不想使用 Docker，或 Docker 環境跑不起來，還有 [REPL](https://repl.it/@yaosiang/TripService) 可用喔。

## 題目

想像一個旅行者的社交網路服務，你需要登入才能看到內容，也必須成為某人的朋友，才能看到他的旅程。

這個練習展示了一段糟糕的 Trip Service 程式碼，它沒有任何測試，並具有許多大型 Legacy Code 常見的問題，例如 Singletons，Static calls 和 Feature Envy 等，使它修復起來非常困難。

你的任務是為它添加測試，使其可以安全地進行重構，僅需要關注 Trip Service 類別，無需測試該類別的依賴。

## 規則

1. 請勿破壞既有行為，在既有程式碼沒有被測試覆蓋之前，不可以更改既有程式碼。
2. 上述規則的例外是，當你修改程式碼是為了加上單元測試。
