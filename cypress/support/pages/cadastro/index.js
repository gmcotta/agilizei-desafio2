import el from './elements';

class Cadastro {
  acessarPagina() {
    cy.visit('register');
  }

  preencherCampos({ name, email, password }) {
    cy.get(el.inputUsername).type(name);
    cy.get(el.inputEmail).type(email);
    cy.get(el.inputPassword).type(password);
  }

  submeterCadastro() {
    cy.get(el.buttonRegister).click();
  }
}

export default new Cadastro();
