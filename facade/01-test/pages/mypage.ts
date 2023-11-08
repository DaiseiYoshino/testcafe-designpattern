import {Selector} from 'testcafe';

class MyPageElems {
  constructor() {}

  get logoutButton() {
    return Selector('form#logout-form');
  }

  get myMailAddress() {
    return Selector('p#email');
  }

  get myName() {
    return Selector('p#username');
  }
}

export class MyPage {
  private t: TestController;
  private elems: MyPageElems;

  constructor(t: TestController) {
    this.elems = new MyPageElems();
    this.t = t;
  }

  async assertMailAddress(mailAddress: string) {
    await this.t
      .expect(this.elems.myMailAddress.innerText)
      .eql(mailAddress);
  }

  async assertMyName(name: string) {
    await this.t
      .expect(this.elems.myName.innerText)
      .eql(name);
  }

  async logout() {
    await this.t.click(this.elems.logoutButton);
  }
}
