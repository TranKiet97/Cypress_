import {SRHomePage} from '../models/pages/SRHomePage'

describe('SRHomePage Test', function() {

    it('Should be able to print all titles', () => {
        cy.visit("https://www.simplyrecipes.com/");
        cy.get('.card__title').each($title => cy.log($title.text().trim()));
    });

    it.only('Should be able to interact with a component', () => {
        cy.visit("https://www.simplyrecipes.com/");
        const srHomePage = new SRHomePage();
        srHomePage.heroComponent().cardTitle.then($title => {
            let title = $title.text().trim();
            cy.wrap('').then(() => expect(title).to.be.eq('Fish Stew with Ginger and Tomatoes'))
        });
    });
})