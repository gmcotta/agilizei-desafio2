import el from './elements';

class Publicacoes {
  acessarPaginaDeFormulariodeNovaPublicacao() {
    cy.get(el.linkNewArticle).click();
  }

  preencherFormulario({ title, description, body, tag }) {
    cy.get(el.inputTitle).type(title);
    cy.get(el.inputDescription).type(description);
    cy.get(el.textareaContent).type(body);
    cy.get(el.inputTags).type(tag);
  }

  enviarPublicacao() {
    cy.get(el.buttonSubmit).click();
  }
}

export default new Publicacoes();
