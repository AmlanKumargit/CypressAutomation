import Homep from "../../support/PageObjects/Homep.command";

describe("Amazon", function () {
  const e = new Homep();

  before("navigation", function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Login_Navigate-add-products-best-sellers", function () {
    var opt = 3;

    cy.visit("/");
    e.getSigninbox().click();
    cy.SignIn(this.data.number, this.data.password);

    e.getBestSellers().click();
    cy.selectProd();

    //cy.url().should('include','B08P5LWSS3')
    cy.get("body").should(
      "include.text",
      "WILDHORN® Carter Leather Wallet for Men (Black Croco)"
    );

    cy.get("#selectQuantity").invoke("removeAttr", "display");
    cy.get(".a-column > .a-dropdown-container > #quantity")
      .select(opt)
      .should("have.value", opt + 1);

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

    cy.get("#add-to-cart-button").click(); // Add to Cart

    cy.get("#nav-cart-count")
      .then(($btn) => {
        const count = $btn.text();
        c2 = Number(count);
        res = c2 - c1;
        if (res == opt + 1) {
          cy.log("Products added to the carts match the quantity");
        }
      })
      .then(function () {
        cy.log("Total products:" + c2 + " and " + "New products added:" + res);
      }); //after adding

    cy.get("body").should("include.text", "Added to Cart");
    cy.url().should("include", "cart");
  });
});
