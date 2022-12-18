const CHECKBOXES_SEL = "[type='checkbox']"
describe('Handling Checkboxes', () => {
    it('Should be able to select/unselect checkboxes', () => {

        cy.visit("/checkboxes");

        // try to unselect the second checkbox
        cy.get(CHECKBOXES_SEL).eq(1).click();

        // verify all checkboxes are unselected
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should('have.length', 2);
        
        // loop over all checkboxes again then select all
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").then(item => {
            cy.get(item).click({multiple: true});
        })

    });
})