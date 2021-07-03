class Publicacoes {
  acessarPaginaDeFormulariodeNovaPublicacao() {
    cy.get('a[href*="editor"]').click();
  }

  preencherFormulario({ title, description, body, tag }) {
    cy.get('input[ng-model*="title"]').type(title);
    cy.get('input[ng-model*="description"]').type(description);
    cy.get('textarea[ng-model*="body"]').type(body);
    cy.get('input[ng-model*="tagField"]').type(tag);
  }

  enviarPublicacao() {
    cy.get('button.btn-primary').click();
  }
}

export default new Publicacoes();
