import {fixture, test, t} from 'testcafe';

import {TopPage} from './pages/top';

const Top = new TopPage(t);

fixture `Page Object Model Pattern`;

test(
  'Test 1',
  async t => {
    await t.navigateTo('https://hotel.testplanisphere.dev/ja/');
    await Top.clickLoginButton();
  }
)
