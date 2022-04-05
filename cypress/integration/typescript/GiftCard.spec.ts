import Homep from "../../support/PageObjects/Homep.command";

describe("Amazon", function () {
  const e = new Homep();

  before("navigation", function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Login_Add-gift-card", function () {
    cy.visit("/");
    e.getSigninbox().click();
    cy.SignIn(this.data.number, this.data.password); //LOGIN

    e.getGiftcard().click();

    cy.get("body").should("include.text", "The Gift Cards Store");
    cy.url().should("include", "gift-card");

    e.getColleaguecard().click();

    cy.get("body").should("include.text", "Amazon Pay eGift Card");

    cy.get("#gc-mini-picker-amount-1").click(); //select amount

    //Compare if the products added match the number shown in the cart
    var c1, c2, res;
    cy.get("#nav-cart-count")
      .then(($btn) => {
        const count = $btn.text();
        c1 = Number(count);
      })
      .then(function () {
        cy.log("Initial products in the cart:" + c1);
      }); //before adding

    cy.get("#gc-buy-box-atc").click(); //add to cart

    cy.get("body").should("include.text", "Added to Cart");
    cy.url().should("include", "cart");

    e.getCart().click();

    //Compare if the products added match the number shown in the cart
    cy.get("#nav-cart-count")
      .then(($btn) => {
        const count = $btn.text();
        c2 = Number(count);
        res = c2 - c1;
        if (res == 1) {
          cy.log("Products added to the carts match the quantity");
        }
      })
      .then(function () {
        cy.log("Total products:" + c2 + " and " + "New products added:" + res);
      }); //after adding
  });
});
