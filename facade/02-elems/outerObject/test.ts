import {fixture, test, t} from 'testcafe';

import {TestFacade} from './testFacade';

const testFacade = new TestFacade(t);

fixture `Facade Page Object Model Pattern - Element definision is outside object`

test(
  'Test 1',
  async t => {
    await t.navigateTo('https://hotel.testplanisphere.dev/ja/');
    await testFacade.goToLoginPage();
  }
)
