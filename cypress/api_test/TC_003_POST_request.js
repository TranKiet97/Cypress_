describe("Test POST request", () => {
  it("Should be able to send POST request and verify the response", () => {
    let url = "https://jsonplaceholder.typicode.com/posts";

    let header = {
      "Content-type": "application/json; charset=UTF-8",
    };

    let reqBody = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    let requestObject = {
      method: "POST",
      url: url,
      headers: header,
      body: reqBody,
    };

    cy.request(requestObject).then((res) => {
      // cy.log(JSON.stringify(res.body));
      let { status } = res;
      let resBody = res.body;
      expect(status).to.eq(201, "Varifying Status");
      let {userId, title, body} = resBody;
      expect(userId).to.eq(reqBody.userId, "Verifying userId");
      expect(title).to.eq(reqBody.title, "Verifying title");
      expect(body).to.eq(reqBody.body, "Verifying body");
    });
  });
});
