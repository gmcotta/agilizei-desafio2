import el from './elements'

class Login {
  acessarPagina() {
    cy.visit('login');
  }

  preencherCampos({ email, password }) {
    cy.get(el.inputEmail).type(email);
    cy.get(el.inputPassword).type(password);
  }
  
  fazerLogin() {
    cy.get(el.buttonLogin).click();
  }
}

export default new Login();
