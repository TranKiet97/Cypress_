describe('Exploring Default Command Timeout', () => {
    it('Should be able to apply custom default timeout', {defaultCommandTimeout: 6000}, () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get('#username__').type('abc');
        cy.get('#password__', {timeout: 5000}).type('abc');
    });
});