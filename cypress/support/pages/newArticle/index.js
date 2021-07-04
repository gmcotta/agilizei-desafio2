/// <reference types="cypress" />

import el from './elements';

class NewArticlePage {
  constructor({ title, description, content, tag }) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.tag = tag;
  }

  accessPage() {
    cy.get(el.linkNewArticle).click();
  }

  fillForm() {
    cy.get(el.inputTitle).type(this.title);
    cy.get(el.inputDescription).type(this.description);
    cy.get(el.textareaContent).type(this.content);
    cy.get(el.inputTags).type(this.tag);
  }

  submitForm() {
    cy.get(el.buttonSubmit).click();
  }

  interceptRoutes() {
    cy.intercept('POST', '**/api/articles').as('POST-Articles');
    cy.intercept('GET', '**/api/articles/title-**').as('GET-ArticlesTitle');
    cy.intercept('GET', '**/api/articles/title-**/comments')
      .as('GET-ArticlesTitleComments');
  }

  checkIfNewArticleWasCreated() {
    cy.wait('@POST-Articles').then(res => {
      expect(res.response.statusCode).to.eq(200);
    });
    cy.wait('@GET-ArticlesTitle').then(res => {
      expect(res.response.statusCode).to.eq(200);
    });
    cy.wait('@GET-ArticlesTitleComments').then(res => {
      expect(res.response.statusCode).to.eq(200);
    });
    cy.get('h1').should('contain', this.title);
    cy.get('div[ng-bind-html*=body] p').should('contain', this.content);
  }
}

export default NewArticlePage;
