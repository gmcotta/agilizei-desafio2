import el from './elements';
import Routes from '../../routes';
class UserRegistrationPage {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  accessPage() {
    cy.visit('register');
  }

  fillForm() {
    cy.get(el.inputUsername).type(this.name);
    cy.get(el.inputEmail).type(this.email);
    cy.get(el.inputPassword).type(this.password);
  }

  submitForm() {
    cy.get(el.buttonRegister).click();
  }

  checkIfUserWasCreatedSuccessfully() {
    cy.wait(`@${Routes.alias.GET_TAGS}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    });
    cy.wait(`@${Routes.alias.GET_ARTICLES_FEED}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    });
    cy.url().should('include', '/');
    cy.get('a[ui-sref*="username"]').should('contain', this.name);
  }
}

export default UserRegistrationPage;
