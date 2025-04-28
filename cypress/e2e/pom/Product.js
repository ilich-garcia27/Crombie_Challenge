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

  // Function to scroll to the quantity list and select 3 units

  selectThreeUnits() {
    this.getQuantityList().scrollIntoView({ duration: 1000, easing: 'swing' });
    this.clickQuantityList();
    this.clickThreeUnits();
  }

  // Function to scroll to the "Agregar al carrito" button and click it

  addToCart() {
    this.getAddToCartButton().scrollIntoView({ duration: 1000, easing: 'swing' });
    this.clickAddToCartButton();

    cy.origin('https://www.mercadolibre.com', () => {
      cy.url().should('include', 'login');
      cy.contains('¡Hola! Para agregar al carrito, ingresa a tu cuenta').should('exist'); // Verify that the login disclaimer shows
      cy.get('[data-testid="login-link"]').should('exist'); // Verify that the "Crear cuenta" button exists
      cy.get('[id=":R579:"]').should('exist'); // Verify that the "Ingresar" button exists
    });
  }
}