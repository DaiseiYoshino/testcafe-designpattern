import {TopPage} from './pages/top';
import {LoginPage} from './pages/login';
import {MyPage} from './pages/mypage';

export class TestFacade {
  private t: TestController;
  private TopPage: TopPage;
  private LoginPage: LoginPage;
  private MyPage: MyPage;
  
  constructor(t: TestController) {
    this.t = t;
    this.TopPage = new TopPage(this.t);
    this.LoginPage = new LoginPage(this.t);
    this.MyPage = new MyPage(this.t);
  }

  async goToLoginPage() {
    await this.TopPage.clickLoginButton();
  }

  async loginAndCheckInfos(
    mailAddress: string,
    password: string,
    name: string
  ) {
    await this.LoginPage.login(
      mailAddress,
      password
    );
    await this.MyPage.assertMailAddress(mailAddress);
    await this.MyPage.assertMyName(name);
  }

  async logout() {
    await this.MyPage.logout();
  }
}
