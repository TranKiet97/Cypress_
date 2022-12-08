import data from '../fixtures/data.json'
describe('Fixtures Demo', () => {
    beforeEach(() => {
        cy.visit('/login');   
        cy.fixture('data').then(function(testdata) {
            cy.log('DATA', testdata)
            this.item = testdata;
            cy.log('THIS', this.item)
        })
    });

    it('Standard User', function(){
        cy.get("#username").type(data.standardUsername);
        cy.get("div>input[name='password']").type(this.item.systemPassword);
        cy.get("button[type=\"submit\"]").click();
    });
});