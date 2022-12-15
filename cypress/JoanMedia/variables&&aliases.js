describe('Variable && Aliases', () => {

    // it('Return Variables Miscoception', () => {
    //     cy.visit('https://demoqa.com/modal-dialogs')
    //     const smallModalText = cy.get('#showSmallModal').text();
    //     cy.log(smallModalText);
    // });

    it('Closures & Variables', () => {
        cy.visit('https://demoqa.com/modal-dialogs')
        cy.get('#showSmallModal')
        .then($modalButton => {
            const smallModalText = $modalButton.text();
            cy.log(smallModalText);

            $modalButton.click()
            cy.get('#example-modal-sizes-title-sm', {timeout: 10000}).contains(smallModalText, {matchCase: false})
        })
    });

    it('Alias', function(){
        cy.get('#showSmallModal').invoke('text').as('invokeText')
        cy.get('#showSmallModal')
        .then($modalButton => {
            const smallModalText = $modalButton.text();
            cy.log(smallModalText);
            cy.wrap(smallModalText).as('wrapText')
        })
    });

    it('Sharing Context', function(){
        cy.log(this.invokeText)
        cy.log(this.wrapText)
    });

});