import { loginLocators } from './logInLocators'; 

describe('Login Tests', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('https://www.ajio.com/search/?text=shirt'); 

    // Enter the phone number
    cy.get(loginLocators.phoneNumberField).type('1234567893'); 

    // Enter the password
    cy.get(loginLocators.passwordField).type('1234');

    cy.get(loginLocators.loginButton).click();
    cy.url().should('contain', 'https://www.ajio.com/search/?text=shirt'); 
  });

  it('should show error message with invalid credentials', () => {
    cy.visit('https://www.ajio.com/search/?text=shirt'); 

    // Enter the phone number/username
    cy.get(loginLocators.phoneNumberField).type('invalid'); 

    // Enter the password (wrong password case)
    cy.get(loginLocators.passwordField).type('wrong');

    // Click the login button
    cy.get(loginLocators.loginButton).click();

    // Check for error message after failed login
    cy.get('.error-message').should('be.visible');
  });
});
