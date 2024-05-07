/// <reference types="cypress" />

import { cartPage } from "../POM/cart/cart";
import { cartLocators } from "../POM/cart/cartLocators";


describe('AJIO - Test Cart', () => {
    beforeEach(() => {
        cy.visit('https://www.ajio.com/'); 
    });

    describe('Verify Empty Cart', () => {
        it('Should display an empty cart message', () => {
            cartPage.open(); 
            cy.get(cartLocators.emptyCart).should('.empty-msg[aria-label="Your Shopping Bag is Empty!!"]'); 
            cy.get(cartLocators.emptyCart).should('contain.text', 'Your Shopping Bag is Empty!!');
        });
    });

    describe('Remove Items from Cart', () => {
      it('Should remove a product from the cart', () => {
        // check is there are products in the cart
        cartPage.open();
        cy.get(cartLocators.productInCart).should('exist'); 
  
        // Remove the product from the cart
        cartPage.removeProductByIndex(0); 
  
        // Assert that the product is removed from the cart
        cy.get(cartLocators.productInCart).should('not.exist'); 
      });
  
      it('Should remove a product from the cart by name', () => {
        //check is there are products in the cart
        cartPage.open();
        cartPage.elements.productInCart().should('contain', 'WUXI -Men Knitted Loose Fit Shirt with Mandarin Collar'); 
  
        // Remove the product by name
        cartPage.removeProductByName('WUXI -Men Knitted Loose Fit Shirt with Mandarin Collar'); 
  
        // Assert the product no longer exists in the cart
        cartPage.elements.productInCart().should('not.contain', 'WUXI -Men Knitted Loose Fit Shirt with Mandarin Collar');
      });
    });  

    describe('Verify Total Price', () => {
      it('Should update the total price when removing items from the cart', () => {
        let initialTotal;
        cartPage.open(); 
        cartPage.elements.totalPrice().invoke('text').then((text) => {
          initialTotal = parseFloat(text.replace(/[^\d.-]/g, ''));
        });
    
        //removing a product
        cartPage.removeProductByIndex(0);
    
        //get the new total price after removing the product
        cartPage.elements.totalPrice().invoke('text').then((text) => {
          const newTotal = parseFloat(text.replace(/[^\d.-]/g, '')); 
    
          // Assert that the new total price is less than the initial total price
          expect(newTotal).to.be.lessThan(initialTotal); 
        });
      });
    });
    
});
