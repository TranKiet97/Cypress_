import homeSaucePage from '../pages/homeSaucePage'
import inventoryPage from '../pages/inventoryPage'

const tests = require('../fixtures/sauceUsers.json');

describe('JSON OBJECT DEMO', () => {
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/')
    })
    tests.forEach(test => {
        it('test.name', () => {
            // cy.log(test);
            homeSaucePage.typeUsername(test.username);
            homeSaucePage.typePassword(test.password);
            homeSaucePage.clickLogin();
            if(test.name === 'Should login to inventory page'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected);
            } else {
                homeSaucePage.elements.errorMessage().should('have.text', test.expected);
            }
        });
    })
})