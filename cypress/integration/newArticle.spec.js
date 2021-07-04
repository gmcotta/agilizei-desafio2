/// <reference types="cypress" />
import faker from 'faker';

import NewArticlePageObject from '../support/pages/newArticle';

let newArticlePage;

context('New Article', () => {
  // Arrange
  beforeEach(() => {
    const title = 'Title';
    const description = 'Description';
    const content = faker.lorem.paragraph();
    const tag = 'Tag';

    newArticlePage = new NewArticlePageObject( 
      { title, description, content, tag }
    );
    cy.backgroundLogin();
    newArticlePage.accessPage();
  });
  it('should create a new article', () => {
    // Arrange
    newArticlePage.interceptRoutes();

    // Act
    newArticlePage.fillForm();
    newArticlePage.submitForm();

    // Assert
    newArticlePage.checkIfNewArticleWasCreated();
  });
});
