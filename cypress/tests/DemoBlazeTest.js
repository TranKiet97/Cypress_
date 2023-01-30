import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from "../tests/products.json";

describe('Demo Blaze', () => {
    
    it('Should be able to get all card data', () => {
        cy.visit('https://demoblaze.com/');
        new DemoBlazePage().getAllCardData().then($allCardData => {
            cy.wrap('').then(() => {
                expect($allCardData).to.be.deep.eq(products);
            })
        })
    })
    
});