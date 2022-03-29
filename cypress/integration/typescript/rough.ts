/**it('Sign in_Email-already-in-use', function(){
    cy.visit('/')
    e.getSigninbox().trigger('mouseover')
    cy.contains('Start here.').click({force: true})
    cy.url().should('include','register')

    cy.get('#ap_customer_name').type('Amlan dummy')
    //cy.get('#ap_phone_number').type('9840755447')
    cy.get('#ap_email').type('amlankumar420@gmail.com')
    cy.get('#ap_password').type('Amlan@422')
    cy.get('#ap_password_check').type('Amlan@422')
    cy.get('#continue').click()
    
    cy.get('.a-spacing-large > .a-box > .a-box-inner').should('contain.text','E-mail address already in use')
    cy.contains('Sign-In').click()
    cy.url().should('include','signin')
    
})

it('Login_Search-and-buy', function(){
    
    cy.visit('/')
    e.getSigninbox().click()
    cy.SignIn('9840756827','Amlan@420')

    //Assert logged in userprofile
    cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Amlan') 
    cy.get('#nav-link-accountList-nav-line-1').should('not.have.text','Hello, Sign in')

    //search_Autocomplete
    cy.get('#twotabsearchtextbox').type('One plus')
    cy.get('.s-suggestion').each(($e1,index,$list)=>
    {
        if($e1.text().includes('9 pro'))
        {
            $e1.click()
        }
    })// Select One Plus 9 pro
    cy.get('#twotabsearchtextbox').should('have.value', 'one pluse9 pro')

    //Select a Product
  //cy.get('[data-asin="B089MS8SKL"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').invoke('removeAttr','target').click()
})**/