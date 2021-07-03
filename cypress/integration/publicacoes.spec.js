/// <reference types="cypress" />


import faker from 'faker';
import Publicacao from '../support/pages/publicacoes';

context('Publicações', () => {
  beforeEach(() => {
    cy.backgroundLogin();
    Publicacao.acessarPaginaDeFormulariodeNovaPublicacao();
    cy.get('a[href*="editor"]').click();
  });
  it('Criar uma nova publicação', () => {
    const title = 'Title';
    const description = 'Description';
    const body = faker.lorem.paragraph();
    const tag = 'Tag';

    Publicacao.preencherFormulario({ title, description, body, tag });
    Publicacao.enviarPublicacao();

    cy.get('h1').should('contain', title);
    cy.get('div[ng-bind-html*=body] p').should('contain', body);
  });
});
