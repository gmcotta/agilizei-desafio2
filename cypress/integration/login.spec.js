/// <reference types="cypress" />

context('Login', () => {
  it('Realizar login com sucesso', () => {
    const { email, password } = Cypress.config().user;
    cy.visit('login');

    cy.get('input[ng-model*="email"]').type(email);
    cy.get('input[ng-model*="password"]').type(password);
    cy.get('button.btn-primary').click();
  });
});
