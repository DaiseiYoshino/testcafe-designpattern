# facade/02-elems

## About

Page Object が持つページ内要素の情報の設定について、各種方法を試していきたい。

## やらない方が良さそうなパターン

### 操作の各メソッド内に要素を定義する

```typescript
async clickExampleButton() {
  const button = Selector('button#example');
  await t.click(button);
}
```

複数のメソッドで、同一の要素を使用する可能性がある。その場合、その要素の定義を変更する際、複数箇所のコード変更が必要になり、保守性が下がりかねない。
