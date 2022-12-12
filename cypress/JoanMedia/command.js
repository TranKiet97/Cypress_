describe('Command Example', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    
    it('Test', () => {
        cy.typeLogin('tomsmith', 'SuperSecretPassword!');
        cy.log('Testing');
    });
});