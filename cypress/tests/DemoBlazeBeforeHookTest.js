import DemoBlazePage from "../models/pages/DemoBlazePage";
import { HomePageAPI } from "../support/HomePageAPI";
import products from "../tests/products.json";

describe('Demo Blaze', () => {

    let apiProduct;

    beforeEach(() => {
        cy.visit('https://demoblaze.com/');
        HomePageAPI.getHomePageProducts().then($entries => apiProduct = $entries)
    });

    it('Should be able to get all card data', () => {
        // Intercept default homepage products
        let apiProductData = apiProduct.response.body.Items
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
    
});