// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress" />

import Routes from './routes';

Cypress.Commands.add('backgroundLogin', () => {
  const { apiUrl, user } = Cypress.config();
  const { email, password } = user;

  cy.request({
    method: 'POST',
    url: `${apiUrl}users/login`,
    body: {
      user: {
        email,
        password,
      }
    }
  }).then(loginResponse => {
    const { token } = loginResponse.body.user;
    cy.log(token);
    cy.visit('/', {
      onBeforeLoad: window => {
        window.localStorage.setItem('jwtToken', token);
      }
    });
  });
});

beforeEach(() => {
  Routes.init();
});
