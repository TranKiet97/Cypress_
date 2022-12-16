describe('Test DELETE Method', () => {
    it('Should be able to send a DELETE request with Cypress', () => {
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1"
        }).then(res => {
            expect(res.status).to.eq(200);
        })
    });
});