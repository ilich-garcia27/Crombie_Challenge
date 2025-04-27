export class Listing {
  visit() {
    cy.visit('https://listado.mercadolibre.com.mx/hisopos?sb=all_mercadolibre#D[A:hisopos]');
  }

  // Getters for the elements on the listing page

  getProductPagination() {
    return cy.get('.andes-pagination');
  }

  getSecondPageButton() {
    return cy.get('.andes-pagination__button--next');
  }

  getSearchResultsList() {
    return cy.get('.ui-search-result__wrapper');
  }

  // Function to interact with the elements

  clickSecondPageButton() {
    this.getSecondPageButton().click();
  }
}