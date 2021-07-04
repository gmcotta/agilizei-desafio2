/// <reference types="cypress" />
import LoginPage from '../support/pages/login';

context('Login', () => {
  it('should login successfully', () => {
    const { email, password, name } = Cypress.config().user;
    
    LoginPage.accessPage();
    LoginPage.fillForm({ email, password });
    LoginPage.submitForm();

    cy.get('a[ui-sref*="username"]').should('contain', name);
  });
});
