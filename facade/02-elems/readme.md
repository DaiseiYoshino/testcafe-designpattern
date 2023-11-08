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

変数の責任範囲が狭まるというメリットはある。
しかし、複数のメソッドで、同一の要素を使用する可能性がある。その場合、その要素の定義を変更する際、複数箇所のコード変更が必要になり、保守性が下がりかねない。

## 要素定義を外部Classのパラメータにまとめる

```typescript
class SomePageElems {
  public anInput: Selector;
  public anotherInput: Selector;
  public otherInput: Selector;
  public submitButton: Selector;
  constructor() {
    this.anInput = Selector('input#aninput');
    this.anotherInput = Selector('input#anotherinput');
    this.otherInput = Selector('input#other');
    this.submitButton = Selector('button#submit');
  }
}
```

TypeScriptの場合、classのパラメータの実体を定義するのとは別に、型の定義も行わなければならない。
上記のような形式だと、単なるobjectに対するclassの優位性が特になく、記述だけ煩雑になっているように思える……

## 要素定義を外部Objectにまとめる

```typescript
function goods(nth: number) {
  const elem = Selector('div.goods').nth(nth);
  return {
    image: elem.find('img'),
    description: elem.find('span.description'),
    cartButton: elem.find('button.cart')
  };
}

const elems = {
  checkoutButton: Selector('button#checkout'),
  goods: goods
}
```

階層構造になっている要素を表したいという時に、要素定義に関するclassを作成するのに比べて、表現が容易になるように思える。
但し、可読性が高いかは分からない。
変更への対応しやすさについても、若干疑問。
