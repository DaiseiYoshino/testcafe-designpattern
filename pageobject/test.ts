import {fixture, test, t} from 'testcafe';

import {TopPage} from './pages/top';
import {LoginPage} from './pages/login';
import {MyPage} from './pages/mypage';

const Top = new TopPage(t);
const Login = new LoginPage(t);
const myPage = new MyPage(t);

fixture `Page Object Model Pattern`;

test(
  'Test 1',
  async t => {
    await t.navigateTo('https://hotel.testplanisphere.dev/ja/');
    await Top.clickLoginButton();
    await Login.login('ichiro@example.com', 'password');
    await myPage.assertMailAddress('ichiro@example.com');
    await myPage.assertMyName('山田一郎');
    await myPage.logout();
  }
)
