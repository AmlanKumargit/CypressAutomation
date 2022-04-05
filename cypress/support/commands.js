// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get("h4.card-title").each(($e1, index, $list) => {
    if ($e1.text().includes(productName)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("selectbabyProd", (babyproductName) => {
  cy.get("div.br-vv-item-card-box-item-detail-text").each(
    ($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes(babyproductName)) {
        if (index == 0) {
          cy.get('input[type="submit"]')
            .eq(index + 2)
            .click({ force: true });
        } else {
          cy.get('input[type="submit"]')
            .eq(index * 2 + 2)
            .click({ force: true });
        }
      }
    }
  );
});

Cypress.Commands.add("getOnePlus9Pro", () => {
  cy.get(".s-suggestion").each(($e1, index, $list) => {
    if ($e1.text().includes("9 pro")) {
      $e1.click();
    }
  });
});

Cypress.Commands.add("LoginAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/client/auth/login", {
    Username: "amlan",
    Userpassword: "amlan123",
  }).then(function (response) {
    expect(response.status).eq.to(200);
    Cypress.env("token", response.body.token);
  });
});

Cypress.Commands.add("SignIn", (phone, password) => {
  cy.get("#ap_email").type(phone);
  cy.get("#continue").click();
  cy.get("#ap_password").type(password);
  cy.get("#signInSubmit").click();
});

Cypress.Commands.add("selectProd", () => {
  cy.get("a.a-link-normal").each(($e1, index, $list) => {
    if (
      $e1
        .text()
        .includes("WILDHORN® Carter Leather Wallet for Men (Black Croco)")
    ) {
      cy.get("a.a-link-normal").eq(index).click();
    }
  });
});

Cypress.Commands.add("removeProd", () => {
  //cy.get('span.a-truncate-cut').should('be.visible')
  cy.get("span.a-truncate-cut").each(($e1, index, $list) => {
    if (
      $e1
        .text()
        .includes("WILDHORN® Carter Leather Wallet for Men (Black Croco)")
    ) {
      if (index == 0) {
        cy.get('input[value="Delete"]').eq(index).click({ force: true });
      } else {
        cy.get('input[value="Delete"]')
          .eq(index - 1)
          .click({ force: true });
      }
    }
  });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
