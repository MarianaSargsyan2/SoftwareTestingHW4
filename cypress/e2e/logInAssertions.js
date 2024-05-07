import { loginPage } from "../POM/login/login";

// Common assertions for login functionality
export const loginAssertions = {
  assertSuccessfulLogin() {
    // Verify the user is redirected after a successful login
    cy.url().should('include', '/dashboard'); // Example URL check
    // Check for a specific element that indicates successful login
    cy.get('.user-profile').should('be.visible'); // Example user profile icon
  },

  assertInvalidLogin() {
    // Verify the error message for invalid login
    loginPage.getErrorMessage().should('contain', 'Invalid username or password');
  },

  assertEmptyFieldsError() {
    // Verify the error message when fields are empty
    loginPage.getErrorMessage().should('contain', 'Please enter your username and password');
  },
};
