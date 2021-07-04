class Cadastro {
  acessarPagina() {
    cy.visit('register');
  }

  preencherCampos({ name, email, password }) {
    cy.get('input[ng-model*="username"]').type(name);
    cy.get('input[ng-model*="email"]').type(email);
    cy.get('input[ng-model*="password"]').type(password);
  }

  submeterCadastro() {
    cy.get('button.btn-primary').click();
  }
}

export default new Cadastro();
