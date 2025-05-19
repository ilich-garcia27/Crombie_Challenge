export class Product {
  visit() {
    cy.visit('https://articulo.mercadolibre.com.mx/MLM-3354371402-disco-solido-ssd-interno-orico-1tb-sata-25-for-laptop-pc-_JM?searchVariation=181596440828#is_advertising=true&searchVariation=181596440828&backend_model=search-backend&position=2&search_layout=stack&type=pad&tracking_id=0cfe1be9-cf68-44ff-b1aa-642387a8be00&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=M2I2MjcwOGUtZGU4OC00N2MzLTgzOGQtNmE5ZjVhZTZmNWE3');
  }

  // Getters for the elements on the product page

  getProductTitle() {
    return cy.get('.ui-pdp-title');
  }

  getQuantityList() {
    return cy.get('.ui-pdp-buybox__quantity__selected');
  }

  getAddToCartButton() {
    return cy.get('[id=":R9ja05lpjm:"]');
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