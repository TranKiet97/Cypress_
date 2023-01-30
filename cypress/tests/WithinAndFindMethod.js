describe('Learn About Within And Find Method', function(){
    it('Within Method', () => {
        cy.visit("https://www.simplyrecipes.com/");
        cy.get('.showcase__hero').within(() => {
            cy.get('.card__title').each($cardTitle => cy.log($cardTitle))
        })
    });

    it.only('Find Method', () => {
        cy.visit("https://www.simplyrecipes.com/");
        cy.get('.showcase__hero').find('.card__title').each($cardTitle => cy.log($cardTitle))
    });
})