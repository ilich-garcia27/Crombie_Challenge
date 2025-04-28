import { Home } from "../pom/Home";
import { Listing } from "../pom/Listing";
import { Product } from "../pom/Product";

const home = new Home();
const listing = new Listing();
const product = new Product();

describe('Crombie Automation Challenge', () => {
  it('searches for a product', () => {
    home.visit();
    home.searchProduct('Samsung S25');
  });

  it('goes to the second page and selects the second free-shipping product', () => {
    listing.visit();
    listing.selectSecondProduct();
  });

  it('selects 3 units and add them to the cart', () => {
    product.visit();
    product.selectThreeUnits();
    product.addToCart();
  });
})