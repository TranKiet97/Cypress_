describe('Handling async request in Cypress', () => {
    it('Should be able to wait until a request resolve', async () => {
        // // Also using for single request ------ async - await
        // let response = await cy.request({
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     method: 'GET',
        // })
        // expect(response.status).to.eq(200);
        // expect(response.body.length).to.eq(100);

        // CRUD
        // let url = "https://jsonplaceholder.typicode.com/posts"
        let url = Cypress.env("baseUrl")

        let header = {"Content-type": "application/json; charset=UTF-8"}
        let createdPostBody = {
            title: "foo",
            body: "bar",
            userId: 1,
        };
        let updatedPostBody = {
            id: 1,
            title: "foo",
            body: "bar",
            userId: 1,
        };

        cy.createPost(createdPostBody)
        .then(res => {
            cy.log(JSON.stringify(res.body));

            cy.getPost((Number(res.body.id) - 1).toString())
            .then(res => {
                cy.log(JSON.stringify(res.body));

                cy.putPost(updatedPostBody, res.body.id)
                .then(res => {
                    cy.log(JSON.stringify(res.body));

                    cy.deletePost(res.body.id)
                    .then(res => {
                        cy.log(JSON.stringify(res.body))
                    })
                })
            })
        })
    });
});