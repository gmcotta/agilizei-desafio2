/// <reference types="cypress" />
import faker from 'faker';

import { limitNameLength } from '../support/utils/limitNameLength';
import UserRegistrationPageObject from '../support/pages/userRegistration';

const { firstName: fakerFirstName, lastName: fakerLastName } = faker.name;
const firstName =  limitNameLength(fakerFirstName(), 9);
const lastName = limitNameLength(fakerLastName(), 9);
const name = `${firstName} ${lastName}`;
const email = faker.internet.email();
const password = '12345678';
const userRegistrationPage = new UserRegistrationPageObject(
  { name, email, password }
);

context('User Registration', () => {
  it('should register a new user', () => {
    // Arrange
    userRegistrationPage.accessPage();

    // Act
    userRegistrationPage.fillForm();
    userRegistrationPage.submitForm();

    // Assert
    userRegistrationPage.checkIfUserWasCreatedSuccessfully();

  });
});
