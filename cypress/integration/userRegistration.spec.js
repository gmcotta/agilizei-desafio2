/// <reference types="cypress" />
import faker from 'faker';
import UserRegistrationPage from '../support/pages/userRegistration';

context('User Registration', () => {
  it('should register a new user', () => {
    const { firstName, lastName } = faker.name;
    const name = `${firstName()} ${lastName()}`;
    const email = faker.internet.email();
    const password = '12345678';

    UserRegistrationPage.accessPage();
    UserRegistrationPage.fillForm({ name, email, password });
    UserRegistrationPage.submitForm();

    cy.url().should('include', '/');
    cy.get('a[ui-sref*="username"]').should('contain', name);
  });
});
