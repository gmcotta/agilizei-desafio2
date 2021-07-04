/// <reference types="cypress" />
const faker = require('faker');

context('Cadastro', () => {
  it('Cadastrar um novo usuário', () => {
    const { firstName, lastName } = faker.name;
    const name = `${firstName()} ${lastName()}`;
    const email = faker.internet.email();

    cy.visit('register');
    cy.get('input[ng-model*="username"]').type(name);
    cy.get('input[ng-model*="email"]').type(email);
    cy.get('input[ng-model*="password"]').type('12345678');
    
    cy.get('button.btn-primary').click();

    cy.url().should('include', '/');
    cy.get('a[ui-sref*="username"]').should('contain', name);
  });
});
