import {TopPage} from './pages/top';

export class TestFacade {
  private t: TestController;
  private TopPage: TopPage;

  constructor(t: TestController) {
    this.t = t;
    this.TopPage = new TopPage(this.t);
  }

  async goToLoginPage() {
    await this.TopPage.clickLoginButton();
  }
}
