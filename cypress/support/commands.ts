
Cypress.Commands.add('SignIn',(email ,password)=>{
    cy.get("#ap_email").type(email)
    cy.get('#continue-announce').click()
    cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()
    })