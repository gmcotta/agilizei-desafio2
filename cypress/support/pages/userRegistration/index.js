import el from './elements';

class UserRegistrationPage {
  accessPage() {
    cy.visit('register');
  }

  fillForm({ name, email, password }) {
    cy.get(el.inputUsername).type(name);
    cy.get(el.inputEmail).type(email);
    cy.get(el.inputPassword).type(password);
  }

  submitForm() {
    cy.get(el.buttonRegister).click();
  }
}

export default new UserRegistrationPage();
