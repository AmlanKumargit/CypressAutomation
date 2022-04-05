/// <reference types="cypress" />

describe("Dashboard", function () {
  //use POSTMAN to push the data into the API body first
  it("faketest", function () {
    cy.request(
      "POST",
      "http://216.10.245.166/Library/Addbook.php", //use cy.request(method,url,body) and other syntaxes. Refer cypress.io docs.
      {
        name: "Don't Learn Appium Automation with Java",
        isbn: "bcd",
        aisle: "2247",
        author: "John foster",
      }
    ).then((response) => {
      expect(response.body).to.have.property("Msg", "successfully added"); //use postman to check POST response
    });
  });
});
