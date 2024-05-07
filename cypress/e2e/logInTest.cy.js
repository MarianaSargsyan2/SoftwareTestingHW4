<reference types="cypress" />

import { loginPage } from "../POM/login/login";
import { loginAssertions } from "../POM/login/loginAssertions"; 

describe('AJIO - Login Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.ajio.com/'); 
  });

  describe('Test Successful Login', () => {
    it('Should login successfully with valid credentials', () => {
      loginPage.login('validUsername', 'validPassword'); 
      loginAssertions.assertSuccessfulLogin();
    });
  });

  describe('Test Invalid Login', () => {
    it('Should display error message for incorrect credentials', () => {
      loginPage.login('invalidUsername', 'wrongPassword');
      loginAssertions.assertInvalidLogin();
    });
  });

  describe('Test Empty Fields', () => {
    it('Should show an error when fields are empty', () => {
      loginPage.clickLogin(); 
      loginAssertions.assertEmptyFieldsError();
    });
  });
});
