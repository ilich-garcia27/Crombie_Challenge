export class Product {
  visit() {
    cy.visit('https://articulo.mercadolibre.com.mx/MLM-2257135563-samsung-galaxy-s25-ultra-1tb-12ram-titanium-gray-nacional-sm-s938b-_JM?searchVariation=187196087579#polycard_client=search-nordic&searchVariation=187196087579&position=13&search_layout=stack&type=item&tracking_id=2c86e8b5-c8dd-4d26-ae11-63b5bd4dae95');
  }

  // Getters for the elements on the product page

  getProductTitle() {
    return cy.get('.ui-pdp-title');
  }

  getQuantityList() {
    return cy.get('.ui-pdp-buybox__quantity__selected');
  }

  getAddToCartButton() {
    return cy.get('[id=":R9j9s5lpjm:"]');
  }

  getThreeUnits() {
    return cy.get('[data-testid="quantity-selector-item-3"] > .andes-list__item-action');
  }

  // Functions to interact with the elements

  clickQuantityList() {
    return this.getQuantityList().should('be.visible').click();
  }

  clickThreeUnits() {
    return this.getThreeUnits().should('be.visible').click();
  }

  clickAddToCartButton() {
    return this.getAddToCartButton().click();
  }
}