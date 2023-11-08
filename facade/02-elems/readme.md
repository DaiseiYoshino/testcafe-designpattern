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

## 外部classにまとめる

■メリット
・コーディングルールとして制定することで、要素定義を一箇所にまとめることができる。
■デメリット
・classの構成によっては、記述が煩雑になるだけだったりする。それに伴って、保守性が低下しかねない。
・手の込んだ構成にしない限り、子要素に命名してプロパティとして呼び出したりするのが困難。「類似の要素Aが複数存在する中の◯番目の子要素Bに対して……」等といった時に、困る。

### 外部classのパラメータにまとめる

```typescript
class SomePageElems {
  public anInput: Selector;
  public anotherInput: Selector;
  public otherInput: Selector;
  public submitButton: Selector;
  constructor() {
    this.anInput = Selector('input#aninput');
    this.anotherInput = Selector('input#another');
    this.otherInput = Selector('input#other');
    this.submitButton = Selector('button#submit');
  }
}
```

TypeScriptの場合、classのパラメータの実体を定義するのとは別に、型の定義も行わなければならない。
上記のような形式だと、単なるobjectに対するclassの優位性が特になく、記述だけ煩雑になっているように思える……

### 外部classのメソッドとしてまとめる

```typescript
class SomePageElems {
  constructor() {}

  anInput() {
    return Selector('input#aninput');
  }

  get anotherInput() {
    return Selector('input#another');
  }

  get otherInput() {
    return Selector('input#other');
  }

  get submitButton() {
    return Selector('button#submit');
  }
}

class SomePage {
  private elems: SomePageElems;
  constructor() {
    this.elems = new SomePageElems();
  }

  async inputAnInput(text: string) {
    await t.typeText(
      this.elems.anInput(),
      text
    );
  }

  async inputAnotherInput(text: string) {
    await t.typeText(
      this.elems.anotherInput,
      text
    );
  }
  // ...
}
```

classのパラメータに設定するのに比べ、一気に編集すべき箇所がまとまる。
但し、若干記述量が多いことには変わりない。
また、少なくともこういったclassの構成だと、子要素への命名等はやりづらい。

## Objectにまとめる

■メリット
・classを用いた定義に比べ、柔軟な構成にできる。子要素に対する命名も実現可能。
・列挙するのみ等、定義対象がシンプルな場合、classを用いるのに比べて記述が簡素になる。
■デメリット
・自由すぎる。コーディングルールを設定した上できっちり守らない場合、可読性も保守性も崩壊しかねない。

### 要素定義を外部Objectにまとめる

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
