import {Selector} from 'testcafe';
import {BaseElem} from '../lib/elem';
import {BasePage} from '../lib/page';

export class MyPage extends BasePage {
  constructor(t: TestController) {
    super(t);
  }

  get logoutButton() {
    return this.elem(Selector('form#logout-form'));
  }

  get myMailAddress() {
    return this.elem(Selector('p#email'));
  }

  get myName() {
    return this.elem(Selector('p#username'));
  }

  async assertMailAddress(mailAddress: string) {
    await this.myMailAddress.isInnerText(mailAddress);
  }

  async assertMyName(name: string) {
    await this.myName.isInnerText(name);
  }

  async logout() {
    await this.logoutButton.click();
  }
}
