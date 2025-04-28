export class Listing {
  visit() {
    cy.visit('https://listado.mercadolibre.com.mx/samsung-s25#D[A:samsung%20s25]');
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

  selectSecondProduct() {
    this.getProductPagination().scrollIntoView({ duration: 2000, easing: 'swing', offset: { top: -300, left: 0 } });
    this.clickSecondPageButton();

    this.getProductIndex().then((productIndex) => {
      this.getSearchResultsList().eq(productIndex).click();
    });

    cy.origin('https://articulo.mercadolibre.com.mx', () => {
      cy.url().should('contain', 'MLM'); // Verify that the URL contains 'MLM' to ensure we are on a product page
      cy.contains('Agregar al carrito').should('exist'); // Verify that the "Agregar al carrito" button exists
    });
  }

  getProductIndex() {
    let freeShippingIndexes = [];

    return this.getSearchResultsList().each(($el, index) => {
      if ($el.text().includes('gratis')) {
        freeShippingIndexes.push(index);
      }
    }).then(() => {
      if (freeShippingIndexes.length >= 2) { // If there are at least two products with free shipping
        return freeShippingIndexes[1]; // The index of the second product with free shipping is returned
      } else { // If there are no more than two products with free shipping, we return the index of the second product in the list
        return 1;
      }
    });
  }
}