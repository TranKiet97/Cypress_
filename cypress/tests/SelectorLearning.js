describe('Element interaction', () => {
    it('Should be able to complete the form', () => {
        // Open the login form page
        cy.visit("/login");
        // Find username by ID then input the text
        cy.get("#username").type("tomsmith");

        // Find password by attribute name then input the text
        cy.get("[name='password']").type("SuperSecretPassword!"); 

        // Find login btn by attribute and tag name then click
        cy.get("button[type=\"submit\"]").click(); 
        
        // DEBUG purpose only (not use in real project)
        cy.wait(3000);
    });
});