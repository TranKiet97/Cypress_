describe('Keystroke Demo', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Cypress Keyboard - Slow Type', {keystrokeDelay: 300}, () => {
        cy.get("#username").type("tomsmith");
        cy.get("div>input[name='password']").type("SuperSecretPassword!");
        cy.get("button[type=\"submit\"]").click(); 
    });
})