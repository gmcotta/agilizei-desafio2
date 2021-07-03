class Login {
  acessarPagina() {
    cy.visit('login');
  }

  preencherCampos({ email, password }) {
    cy.get('input[ng-model*="email"]').type(email);
    cy.get('input[ng-model*="password"]').type(password);
  }
  
  fazerLogin() {
    cy.get('button.btn-primary').click();
  }
}

export default new Login();
