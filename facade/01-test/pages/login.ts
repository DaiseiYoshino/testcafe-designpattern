import {Selector} from 'testcafe';

class LoginPageElems {
  constructor() {}

  get mailAddressInput() {
    return Selector('input#email');
  }

  get passwordInput() {
    return Selector('input#password');
  }

  get loginButton() {
    return Selector('button#login-button')
  }
}

export class LoginPage {
  private t: TestController;
  private elems: LoginPageElems;

  constructor(t: TestController) {
    this.elems = new LoginPageElems;
    this.t = t;
  }

  async inputMailAddress(address: string) {
    await this.t.typeText(
      this.elems.mailAddressInput,
      address
    );
  }

  async inputPassword(pw: string) {
    await this.t.typeText(
      this.elems.passwordInput,
      pw
    );
  }

  async pressLoginButton() {
    await this.t.click(this.elems.loginButton);
  }

  async login(mailAddress: string, password: string) {
    await this.inputMailAddress(mailAddress);
    await this.inputPassword(password);
    await this.pressLoginButton();
  }
}
