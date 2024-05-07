import { cartLocators } from "./cartLocators";

class Cart {
    elements = {
        totalPrice: () => cy.get(cartLocators.totalPrice),
        productList: () => cy.get(cartLocators.basketItemList),
    };

    open() {
        cy.get(cartLocators.cartOpenButton).click(); // Open the cart
    }

    close() {
        cy.get(cartLocators.cartCloseButton).click(); // Close the cart
    }

    closeEmptyBasket() {
        cy.get(cartLocators.emptyBasketCloseButton).filter(':visible').click(); // Close the empty cart dialog
    }

    addProductByIndex(index) {
        cy.get(`${cartLocators.basketItem}${index}`).find(cartLocators.append).click(); // Increase quantity
    }

    removeProductByIndex(index) {
        cy.get(`${cartLocators.basketItem}${index}`).find(cartLocators.removeProduct).click(); // Remove item
    }

    removeProductByName(name) {
        this.elements.productList()
            .contains(name)
            .siblings(cartLocators.removeProduct)
            .click(); // Remove item by product name
    }
}

export const cartPage = new Cart();
