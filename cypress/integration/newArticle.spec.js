/// <reference types="cypress" />

import faker from 'faker';
import NewArticlePage from '../support/pages/newArticle';

context('New Article', () => {
  beforeEach(() => {
    cy.backgroundLogin();
    NewArticlePage.accessPage();
  });
  it('should create a new article', () => {
    const title = 'Title';
    const description = 'Description';
    const content = faker.lorem.paragraph();
    const tag = 'Tag';

    NewArticlePage.fillForm({ title, description, content, tag });
    NewArticlePage.submitForm();

    cy.get('h1').should('contain', title);
    cy.get('div[ng-bind-html*=body] p').should('contain', content);
  });
});
