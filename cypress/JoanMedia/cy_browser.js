describe('Cypress Browser Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.whatismybrowser.com/')
    });

    it('Log Web Browser In4', () => {
        cy.log(Cypress.browser.name)
        cy.log(Cypress.browser.family)
        cy.log(Cypress.browser.isHeaded)
        cy.log(Cypress.browser.isHeadless)
        cy.log(Cypress.browser.path)
        cy.log(Cypress.browser.version)
    });
})