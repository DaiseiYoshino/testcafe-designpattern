export class BaseElem {
  protected t: TestController;
  public selector: Selector;

  constructor(t: TestController, selector: Selector) {
    this.t = t;
    this.selector = selector;
  }

  async click() {
    await this.t.click(this.selector);
  }

  async getInnerText() {
    return await this.selector.innerText;
  }

  async isInnerText(text: string) {
    await this.t
      .expect(this.selector.innerText)
      .eql(text);
  }
}

export class InputElem extends BaseElem {
  constructor(t: TestController, selector: Selector) {
    super(t, selector);
  }

  async typeText(text: string) {
    await this.t.typeText(
      this.selector,
      text
    );
  }
}

export class ElemList<E extends BaseElem>{
  protected t: TestController;
  public selector: Selector;
  protected elemClass: new (t: TestController, selector: Selector) => E

  constructor(t: TestController, selector: Selector, elemClass: new (t: TestController, selector: Selector) => E) {
    this.t = t;
    this.selector = selector;
    this.elemClass = elemClass;
  }

  nth(nth: number): E {
    return <E>new this.elemClass(this.t, this.selector.nth(nth));
  }

  withText(text: string): E {
    return <E>new this.elemClass(this.t, this.selector.withText(text));
  }
}
