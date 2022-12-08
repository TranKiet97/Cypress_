let username = "tomsmith";
let password = "SuperSecretPassword!";

describe('Locators in Cypress', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('GET Method', () => {
        cy.get("#username").type(username);
        cy.get("div>input[name='password']").type(password);
        cy.get("button[type=\"submit\"]").click();
    });

    it('EQ|FIRST|LAST Method', () => {
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('button[type="submit"]').click();
    });

    it('FILTER Method', () => {
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('button').filter('[type="submit"]').click();
    });

    it('FIND Method', () => {
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').last().type(password);
        cy.get('button').filter('[type="submit"]').click();
    });

    it('PARENT Method', () => {
        cy.get('form').parent().should('have.class','example')
    });
});