import {fixture, test, t} from 'testcafe';

import {TestFacade} from './testFacade';

const testFacade = new TestFacade(t);

fixture `Page Object Model Pattern`;

test(
  'Test 1',
  async t => {
    await t.navigateTo('https://hotel.testplanisphere.dev/ja/');
    await testFacade.goToLoginPage();
    await testFacade.loginAndCheckInfos('ichiro@example.com', 'password', '山田一郎');
    await testFacade.logout();
  }
)
