/// <reference types="cypress" />
import faker from 'faker';

import NewArticlePageObject from '../support/pages/newArticle';

const title = 'Title';
const description = 'Description';
const content = faker.lorem.paragraph();
const tag = 'Tag';

const newArticlePage = new NewArticlePageObject( 
  { title, description, content, tag }
);

context('New Article', () => {
  // Arrange
  beforeEach(() => {
    cy.backgroundLogin();
    newArticlePage.accessPage();
  });
  it('should create a new article', () => {
    // Act
    newArticlePage.fillForm();
    newArticlePage.submitForm();

    // Assert
    newArticlePage.checkIfNewArticleWasCreated();
  });
});
