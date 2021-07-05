/// <reference types="cypress" />
import LoginPageObject from '../support/pages/login';

const { email, password, name } = Cypress.config().user;
const loginPage = new LoginPageObject({ email, password, name });

context('Login', () => {
  it('should login successfully', () => {
    // Arrange
    loginPage.accessPage();

    // Act
    loginPage.fillForm();
    loginPage.submitForm();

    // Assert
    loginPage.checkIfLoginWasSuccessful();
  });
});
