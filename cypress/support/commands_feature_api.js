Cypress.Commands.add("createPost", postBody => {
    cy.request({
        method: "POST",
        url: Cypress.evn("baseUrl"),
        headers: header,
        body: postBody
    })
})

Cypress.Commands.add("getPost", postNum => {
    cy.request({
        method: "GET",
        url: Cypress.evn("baseUrl") + "/" + postNum
    })
})

Cypress.Commands.add("putPost", (postBody, postNum) => {
    cy.request({
        method: "PUT",
        url: Cypress.evn("baseUrl") + "/" + postNum,
        headers: header,
        body: postBody
    })
})

Cypress.Commands.add("deletePost", postNum => {
    cy.request({
        method: "DELETE",
        url: Cypress.evn("baseUrl") + "/" + postNum
    })
})