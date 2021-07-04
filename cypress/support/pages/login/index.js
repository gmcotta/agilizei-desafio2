import el from './elements'

class Login {
  accessPage() {
    cy.visit('login');
  }

  fillForm({ email, password }) {
    cy.get(el.inputEmail).type(email);
    cy.get(el.inputPassword).type(password);
  }
  
  submitForm() {
    cy.get(el.buttonLogin).click();
  }
}

export default new Login();
