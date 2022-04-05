/// <reference types="cypress" />

describe("Dashboard", function () {
  it("faketest", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=amlan"; //here amlan doesn't exist so we asserted status code with 404, else if it existed, then we should assert with 403(forbidden)
        req.continue((res) => {
          expect(res.statusCode).to.equal(404); // if statuscode is returned 200 for other author logins, then its a big bug in the website security system
        });
      }
    ).as("booklist");
    cy.get(".btn-primary").click();
  });
});
