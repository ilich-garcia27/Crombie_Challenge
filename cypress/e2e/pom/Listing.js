export class Listing {
    visit() {
        cy.visit('https://listado.mercadolibre.com.mx/samsung-s25#D[A:Samsung%20S25]');
    }

    getProductPagination() {
        return cy.get('.andes-pagination');
    }

    getSecondPageButton() {
        return cy.get('.andes-pagination__button--next');
    }

    clickProductPagination() {
        this.getProductPagination().click();
    }

    clickSecondPageButton() {
        this.getSecondPageButton().click();
    }
}