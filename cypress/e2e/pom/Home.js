export class Home {
  visit() {
    cy.visit('/');
  }

  getSearchInput() {
    return cy.get('#cb1-edit');
  }

  getSearchButton() {
    return cy.get('.nav-icon-search');
  }

  setSearchInputValue(product) {
    this.getSearchInput().clear().type(product);
  }

  clickSearchButton() {
    this.getSearchButton().click();
  }

  searchProduct(product) {
    this.setSearchInputValue(product);
    this.clickSearchButton();

    cy.origin('https://listado.mercadolibre.com.mx/', () => {
      cy.url().should('include', 'listado'); // Verify that the URL contains 'listado'
    });
  }
}