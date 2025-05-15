import LoginPage from '../pageObjects/loginPage';

describe('Login Test', () => {
  it('should login successfully', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.clickLogin();
    LoginPage.verifyLoginSuccess();
  });
});