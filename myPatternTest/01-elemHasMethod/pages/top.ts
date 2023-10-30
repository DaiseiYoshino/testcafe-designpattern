import {Selector} from 'testcafe';
import {BaseElem} from '../lib/elem';
import {BasePage} from '../lib/page';

export class TopPage extends BasePage {
  constructor(t: TestController) {
    super(t);
  }

  private get loginButton() {
    return this.elem(Selector('a').withText('ログイン'));
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
