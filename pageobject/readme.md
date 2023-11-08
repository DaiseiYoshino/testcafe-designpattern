# Page Object Model Patternについて

Page Object Model Patternとは、Webサイト等のテストに於いて、テストケース内で実行する操作やその操作対象を、ページ毎に分割する設計である。
各Page Object内で、ページ内での複数の操作をまとめて行うことが許容される。

シンプルかつ妥当なデザインパターンではあるが、テスト対象の規模が大きくなるほど、テストケースのコードを書くのが辛くなってくるという欠点がある。その欠点を解消する為、発展形であるFacade Design PatternやFluent Page Object Model Design Patternを採用することもある。
