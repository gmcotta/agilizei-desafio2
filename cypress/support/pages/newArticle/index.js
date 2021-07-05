/// <reference types="cypress" />

import el from './elements';
import Routes from '../../routes';

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

  checkIfNewArticleWasCreated() {
    cy.wait(`@${Routes.alias.POST_ARTICLES}`).then(res => {
      expect(res.response.statusCode).to.eq(200);
    });
    cy.wait(`@${Routes.alias.GET_ARTICLES_TITLE}`).then(res => {
      expect(res.response.statusCode).to.eq(200);
    });
    cy.wait(`@${Routes.alias.GET_ARTICLES_TITLE_COMMENTS}`).then(res => {
      expect(res.response.statusCode).to.eq(200);
    });
    cy.get('h1').should('contain', this.title);
    cy.get('div[ng-bind-html*=body] p').should('contain', this.content);
  }
}

export default NewArticlePage;
