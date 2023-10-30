import {fixture, test, t} from 'testcafe';

import {TopPage} from './pages/top';
import {LoginPage} from './pages/login';

const Top = new TopPage(t);
const Login = new LoginPage(t);

fixture `Page Object Model Pattern`;

test(
  'Test 1',
  async t => {
    await t.navigateTo('https://hotel.testplanisphere.dev/ja/');
    await Top.clickLoginButton();
    await Login.login('ichiro@example.com', 'password');
  }
)
