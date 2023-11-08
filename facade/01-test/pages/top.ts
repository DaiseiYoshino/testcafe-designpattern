import {Selector} from 'testcafe';

class TopPageElems {
  constructor() {}

  get loginButton() {
    return Selector('a').withText('ログイン');
  }
}

export class TopPage {
  private t: TestController;
  private elems: TopPageElems;

  constructor(t: TestController) {
    this.elems = new TopPageElems();
    this.t = t;
  }

  async clickLoginButton() {
    await this.t.click(this.elems.loginButton);
  }
}
