import * as Elem from './elem';

export class BasePage {
  protected t: TestController;

  constructor(t: TestController) {
    this.t = t;
  }

  elem(selector: Selector) {
    return new Elem.BaseElem(this.t, selector);
  }

  inputElem(selector: Selector) {
    return new Elem.InputElem(this.t, selector);
  }
}
