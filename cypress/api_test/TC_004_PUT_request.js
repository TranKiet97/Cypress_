describe("Test PUT request", () => {
  it("Should be able to send PUT request and verify the response", () => {
    let url = "https://jsonplaceholder.typicode.com/posts/1";

    let header = {
      'Content-type': 'application/json; charset=UTF-8',
    };

    let reqBody = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    };

    cy.request({
      method: "PUT",
      url: url,
      headers: header,
      body: reqBody,
    })
    .then(res => {
      cy.log(JSON.stringify(res.body));
      let { status } = res;
      let resBody = res.body;
      let {userId, title, body, id} = resBody;
      expect(status).to.eq(200, "Verifying Status");
      expect(userId).to.eq(reqBody.userId, "Verifying userId");
      expect(title).to.eq(reqBody.title, "Verifying title");
      expect(body).to.eq(reqBody.body, "Verifying body");
      expect(id).to.eq(reqBody.id, "Verifying id");
    })
  });
});
