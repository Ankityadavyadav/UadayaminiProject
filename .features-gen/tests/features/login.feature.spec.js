// Generated from: tests\features\login.feature
import { test } from "../../../fixtures/index.ts";

test.describe('Login Functionality', () => {

  test('Valid user can login', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I login with username "standard_user" and password "secret_sauce"', null, { loginPage }); 
    await Then('I should be redirected to the dashboard', null, { page }); 
  });

  test.describe('Invalid user cannot login', () => {

    test('Example #1', async ({ Given, When, loginPage }) => { 
      await Given('I am on the login page', null, { loginPage }); 
      await When('I login with username "invalid_user" and password "secret_sauce"', null, { loginPage }); 
    });

    test('Example #2', async ({ Given, When, loginPage }) => { 
      await Given('I am on the login page', null, { loginPage }); 
      await When('I login with username "standard_user" and password "wrong_password"', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I login with username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I login with username \"invalid_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":22,"value":"\"invalid_user\"","children":[{"start":23,"value":"invalid_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"secret_sauce\"","children":[{"start":51,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I login with username \"standard_user\" and password \"wrong_password\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"wrong_password\"","children":[{"start":52,"value":"wrong_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end