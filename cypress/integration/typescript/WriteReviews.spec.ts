import Homep from "../../support/PageObjects/Homep.command";

describe("Amazon", function () {
  const e = new Homep();

  before("navigation", function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Login_write-a-review", function () {
    cy.visit("/");
    e.getSigninbox().click();
    cy.SignIn(this.data.number, this.data.password);
    e.getOrders().click();
    cy.url().should("include", "orders");
    cy.get("#a-autoid-1-announce").click();
    cy.get("#orderFilter_4").click();
    cy.wait(5000);

    cy.get("#Write-a-product-review_1").click();
    cy.url().should("include", "review");

    e.get4stars().click();
    cy.get("#scarface-review-title-label").type("{ctrl+a}Sample");
    cy.get("#scarface-review-text-card-title").type("{ctrl+a}Test review");
    cy.get('[type="button"]').contains("Submit").click();

    cy.url().should("include", "thankyou");
    cy.get("#react-app").should(
      "contain.text",
      "Review submitted - Thank you!"
    );
  });
});
