export class Home {
  visit() {
    cy.visit('/');
  }

  // Getters for the elements on the home page

  getSearchInput() {
    return cy.get('#cb1-edit');
  }

  getSearchButton() {
    return cy.get('.nav-icon-search');
  }

  // Functions to interact with the elements

  setSearchInputValue(product) {
    this.getSearchInput().clear().type(product);
  }

  clickSearchButton() {
    this.getSearchButton().click();
  }

  // Function to search for a product and verify it got to the list of products
  searchProduct(product) {
    this.setSearchInputValue(product);
    this.clickSearchButton();

    cy.origin('https://listado.mercadolibre.com.mx/', () => {
      cy.url().should('include', 'listado'); // Verify that the URL contains 'listado'
    });
  }
}