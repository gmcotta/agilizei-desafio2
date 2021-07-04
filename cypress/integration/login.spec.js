/// <reference types="cypress" />
import Login from '../support/pages/login';

context('Login', () => {
  it('Realizar login com sucesso', () => {
    const { email, password, name } = Cypress.config().user;
    
    Login.acessarPagina();
    Login.preencherCampos({ email, password });
    Login.fazerLogin();

    cy.get('a[ui-sref*="username"]').should('contain', name);
  });
});
