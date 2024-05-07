import { searchResultLocators } from "./searchResultLocators";

class SearchResultPage {
  elements = {
    searchInput: () => cy.get(searchResultLocators.searchInput),
    productList: () => cy.get(searchResultLocators.productList),
    firstProduct: () => cy.get(searchResultLocators.firstProduct),
    filterPanel: () => cy.get(searchResultLocators.filterPanel),
    sortDropdown: () => cy.get(searchResultLocators.sortDropdown),
  };

  performSearch(query) {
    this.elements.searchInput().clear().type(query + '{enter}'); 
  }

  sortBy(option) {
    this.elements.sortDropdown().select(option); 
  }

  applyFilter(filterType, filterValue) {
    // Example filter application, adjust according to website structure
    this.elements.filterPanel()
      .contains(filterType) // Locate the specific filter type
      .parent()
      .find('input[type="checkbox"]') // Locate the filter checkbox
      .check(); // Check the checkbox to apply the filter
  }
}

export const searchResultPage = new SearchResultPage();
