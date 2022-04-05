/// <reference types="cypress" />
import HomePage from "../../cypress/support/PageObjects/HomePage.js";
import ProductsPage from "../../cypress/support/PageObjects/ProductsPage.js";

describe("Dashboard", function () {
  before("navigation", function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("home", function () {
    const h = new HomePage();
    const p = new ProductsPage();
    cy.visit(Cypress.env("url"));
    h.getEditBox().type(this.data.name);
    h.getGender().select(this.data.gender);
    h.getTwowayDatabinding().should("have.value", this.data.name);
    h.getEditBox().should("have.attr", "minlength", "2");
    h.getEnterpreneur().should("be.disabled");
    // Cypress.config('defaultCommandTimeout',8000)
    h.getShop().click();

    //add to cart
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    //checkout button from Products
    p.getCheckout().click();
    //sum of product check
    var sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($e1, index, $list) => {
        const amount = $e1.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });
    //compare if the total is equal to the sum displayed
    cy.get("h3 strong").then(function (element) {
      const amount = element.text();
      var res = amount.split(" ");
      var total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });

    cy.contains("Checkout").click();
    cy.get("#country").type("India");

    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").check({ force: true });
    cy.get('input[type="submit"]').click();
    cy.get(".alert").then(function (el) {
      const t = el.text();
      expect(t.includes("Success!")).to.be.true;
    });
  });
});
