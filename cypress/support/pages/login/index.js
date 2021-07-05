import el from './elements'
import Routes from '../../routes';

class Login {
  constructor({ email, password, name }) {
    this.email = email;
    this.password = password;
    this.name = name;
  }

  accessPage() {
    cy.visit('login');
  }

  fillForm() {
    cy.get(el.inputEmail).type(this.email);
    cy.get(el.inputPassword).type(this.password);
  }
  
  submitForm() {
    cy.get(el.buttonLogin).click();
  }

  checkIfLoginWasSuccessful() {
    cy.wait(`@${Routes.alias.GET_TAGS}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    });
    cy.wait(`@${Routes.alias.GET_ARTICLES_FEED}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    });
    cy.get('a[ui-sref*="username"]').should('contain', this.name);
  }
}

export default Login;
