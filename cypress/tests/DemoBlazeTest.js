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

    it.only('Should be able to get all card data', () => {
        cy.visit('https://demoblaze.com/');
        // Intercept default homepage products
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        cy.get('@entries').then($entries => {
            let apiProductData = $entries.response.body.Items
            apiProductData = apiProductData.map(item => {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`
                }
            })
            
            new DemoBlazePage().getAllCardData().then($allCardData => {
                cy.wrap('').then(() => {
                    expect($allCardData).to.be.deep.eq(apiProductData);
                })
            })
        })
    })
    
});