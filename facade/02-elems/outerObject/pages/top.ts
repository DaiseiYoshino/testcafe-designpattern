import {Selector} from 'testcafe';

const elems = {
  loginButton: Selector('a').withText('ログイン')
};

export class TopPage {
  private t: TestController;
  private elems = elems;

  constructor(t: TestController) {
    this.t = t;
  }

  async clickLoginButton() {
    await this.t.click(this.elems.loginButton);
  }
}
