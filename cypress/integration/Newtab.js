/// <reference types="cypress" />

describe("Dashboard", function () {
  it("newtab", function () {
    cy.visit("https://qaclickacademy.com/practice.php");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");
  });
});
