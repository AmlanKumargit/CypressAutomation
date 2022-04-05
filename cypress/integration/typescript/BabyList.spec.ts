import { should } from "chai";
import Homep from "../../support/PageObjects/Homep.command";

describe("Amazon", function () {
  const e = new Homep();

  before("navigation", function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Login_Add-to-Baby-list", function () {
    cy.visit("/");
    e.getSigninbox().click();
    cy.SignIn(this.data.number, this.data.password); //LOGIN

    e.getSigninbox().trigger("mouseover");
    e.getBabywishlist().click({ force: true });

    cy.get("#homepageSearchForm").then(function (ele) {
      const text = ele.text();
      expect(text.includes("Find a Baby Wish List"));
    });

    cy.url().should("include", "baby-reg");

    cy.get("#nameOrEmailField").type("Amlan");
    cy.get("#search-submit-button").click();

    cy.url().should("include", "search-results");

    e.getTablenamecol().each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes(this.data.babyname)) {
        $e1.click();
      }
    });
    cy.get("#br-registry-full-name").should("have.text", "Amlan Mishra");

    this.data.babyproductName.forEach(function (element) {
      cy.selectbabyProd(element); //Add baby products to cart
    });
  });
});
