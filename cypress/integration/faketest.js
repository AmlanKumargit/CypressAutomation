/// <reference types="cypress" />

describe("Dashboard", function () {
  it("faketest", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          { book_name: "RestAssured with Java", isbn: "RSU", aisle: "2301" },
        ],
      }
    ).as("booklist");
    cy.get(".btn-primary").click();
    cy.wait("@booklist").should(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1); //if the rows available = response array row length(+1 as the header row is counted as well)
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
