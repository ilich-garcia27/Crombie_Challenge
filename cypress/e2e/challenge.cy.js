import { Home } from "./pom/Home";
import { Listing } from "./pom/Listing";

const home = new Home();
const listing = new Listing();

describe('Crombie Automation Challenge', () => {
  xit('searches for a product', () => {
    home.visit();
    home.setSearchInputValue('Samsung S25');
    home.clickSearchButton();

    cy.origin('https://listado.mercadolibre.com.mx/', () => {
      cy.url().should('include', 'samsung-s25');
    })
  });

  it('navigates down', () => {
    listing.visit();
    listing.getProductPagination().scrollIntoView({ duration: 2000, easing: 'swing', offset: { top: -300, left: 0 } });
    listing.clickSecondPageButton();
  });
})