import {BaseElem, InputElem} from '../lib/elem';
import {Selector} from 'testcafe';
import {BasePage} from '../lib/page';

export class LoginPage extends BasePage {
  constructor(t: TestController) {
    super(t);
  }

  get mailAddressInput() {
    return this.inputElem(Selector('input#email'));
  }

  get passwordInput() {
    return this.inputElem(Selector('input#password'));
  }

  get loginButton() {
    return this.elem(Selector('button#login-button'));
  }

  async inputMailAddress(address: string) {
    await this.mailAddressInput.typeText(address);
  }

  async inputPassword(pw: string) {
    await this.passwordInput.typeText(pw);
  }

  async pressLoginButton() {
    await this.loginButton.click();
  }

  async login(mailAddress: string, password: string) {
    await this.inputMailAddress(mailAddress);
    await this.inputPassword(password);
    await this.pressLoginButton();
  }
}
