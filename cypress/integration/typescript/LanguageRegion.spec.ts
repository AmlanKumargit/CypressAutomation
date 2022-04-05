import Homep from "../../support/PageObjects/Homep.command";

describe("Amazon", function () {
  const e = new Homep();

  before("navigation", function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Login_Change-language-region", function () {
    cy.visit("/");
    e.getLang().click();

    cy.get("body").should("include.text", "Language Settings");
    cy.url().should("include", "customer-preferences");

    e.getRadiobtn().eq(1).check({ force: true }).should("be.checked");
    e.getLangbtn().should("have.text", "परिवर्तन सहेजें");
    e.getLangbtn().click({ force: true }); //Change Language to Hindi and Save

    cy.get("body").should("not.include.text", "Gift Cards");
    cy.get("body").should("include.text", "गिफ्ट कार्ड");

    e.getLang().click();
    e.getRadiobtn().eq(0).check({ force: true }).should("be.checked");
    e.getLangbtn().should("have.text", "Save Changes");
    e.getLangbtn().click({ force: true }); //Change Language back to English and Save

    cy.get("body").should("not.include.text", "गिफ्ट कार्ड");
    cy.get("body").should("include.text", "Gift Cards");

    e.getLang().trigger("mouseover");
    e.getCountr().click({ force: true }); //Change country/region

    cy.get("body").should(
      "include.text",
      "Select your preferred country/region website:"
    );
    cy.url().should("include", "customer-preferences/country");

    cy.get("select").eq(1).select("Brazil (Brasil)", { force: true });
    cy.get("#icp-dropdown").should("have.value", "https://www.amazon.com.br/");

    e.getSubmitbtn()
      .eq(1)
      .then(function (e1) {
        const url = e1.prop("value");
        cy.visit(url);
      });
  });
});
