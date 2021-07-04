import el from './elements';

class NewArticlePage {
  accessPage() {
    cy.get(el.linkNewArticle).click();
  }

  fillForm({ title, description, content, tag }) {
    cy.get(el.inputTitle).type(title);
    cy.get(el.inputDescription).type(description);
    cy.get(el.textareaContent).type(content);
    cy.get(el.inputTags).type(tag);
  }

  submitForm() {
    cy.get(el.buttonSubmit).click();
  }
}

export default new NewArticlePage();
