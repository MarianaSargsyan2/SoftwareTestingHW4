<reference types="cypress" />

import { searchResultPage } from "../POM/searchResultPage/searchResultPage"; // Page Object for search results


describe('AJIO - Search Results Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.ajio.com/'); 
  });

  describe('Test Search Functionality', () => {
    it('Should display results when searching for "shirt"', () => {
      searchResultPage.performSearch('shirt');
      
      // Assert that the product list is displayed and contains products
      searchResultPage.elements.productList().should('be.visible'); 
      searchResultPage.elements.firstProduct().should('exist');
    });
  });

  

  describe('Test Filter Functionality', () => {
    it('Should apply a filter and show correct results', () => {
      searchResultPage.performSearch('shirt');
      
      // Apply a filter, like "Color: Blue"
      searchResultPage.applyFilter('Color', 'Blue');
      
      // Assertions to verify the filter is applied and correct results are shown
      searchResultPage.elements.productList().should('contain.text', 'Blue'); 
    });
  });
});
