/// <reference types="cypress" />
const faker = require('faker');
import Cadastro from '../support/pages/cadastro';

context('Cadastro', () => {
  it('Cadastrar um novo usuário', () => {
    const { firstName, lastName } = faker.name;
    const name = `${firstName()} ${lastName()}`;
    const email = faker.internet.email();
    const password = '12345678';

    Cadastro.acessarPagina();
    Cadastro.preencherCampos({ name, email, password });
    Cadastro.submeterCadastro();

    cy.url().should('include', '/');
    cy.get('a[ui-sref*="username"]').should('contain', name);
  });
});
