describe("Test GET request", () => {
  it("Should be able to send GET request and verify the response", () => {
    cy.request({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    }).then((response) => {
      // Destructure
      let { status, body } = response;
      expect(status).to.eq(200);
      expect(body.length).to.eq(100);

      // Get a random element from array object
      let randomIndex = Math.floor(Math.random()*body.length);
      let randomObject = body[randomIndex];
      // Verify the response
      verifyNotEmpty('userID', randomObject.userId)
      verifyNotEmpty('ID', randomObject.id)
      verifyNotEmpty('title', randomObject.title)
      verifyNotEmpty('body', randomObject.body)
    });
  });
});

// support valification method
let verifyNotEmpty = (name, data) => {
    if(!data){
        expect(true).to.eq(false, `${name} has data`);
    } else {
        expect(true).to.eq(true, `${name} has data`);
    }
}