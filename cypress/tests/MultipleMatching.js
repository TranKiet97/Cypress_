describe('Multiple elems matching interaction', () => {
    it('Should be able to interact with list of elems', () => {
        cy.visit('/login');

        // Use eq()
        cy.get("input").eq(0).type("tomsmith")
        cy.get("input").eq(1).type("SuperSecretPassword!")

        // Use closure 
        cy.get("input").then(items => {
            cy.get(items[0]).clear();
            cy.get(items[0]).type("tomsmith");
            cy.get(items[1]).clear();
            cy.get(items[1]).type("SuperSecretPassword!");
        })

        // Use each
        // cy.get("input").each((item, index) => {
        //     cy.get(item).type("SuperSecretPassword!");
        // })

        cy.get("button[type='submit']").click();
    });
});