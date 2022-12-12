describe('Write/Read File', () => {
    it('Should be writting to json file from the api request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            cy.log(res.body);
            cy.writeFile('cypress/fixtures/todolist.json', res.body);
        })
        cy.readFile('cypress/fixtures/todolist.json')
        .then(todos => cy.expect(todos.length).to.eq(200))
    });
})