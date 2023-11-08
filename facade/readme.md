# Facade Page Object Model Patternについて

Facade Page Object Model Patternは、Page Object Model Patternの派生の設計である。

単純なPage Object Model Patternでは、操作をまとめたとしても、ページ外に影響を及ぼすことができない。Facade Page Object Model Patternでは、複数のページに跨った操作を行うFacadeという層を作ることを許容する。

Facadeを用いることにより、類似の操作を幾つも行うようなテスト群の記述が容易になる。

但し、Facadeの構成方法によっては、改修や保守が大変になってしまうので、注意が必要。
