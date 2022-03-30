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
})

it('Login_write-a-review',function()
    {
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn('9840756827','Amlan@420')
        e.getOrders().click()
        cy.url().should('include','orders')
        cy.get('#a-autoid-1-announce').click()
        cy.get('#orderFilter_4').click()
        cy.wait(5000)

        cy.get('#Write-a-product-review_1').click()
        cy.url().should('include','review')

        cy.get(':nth-child(4) > .ryp__review-stars__star').click()
        cy.get('#scarface-review-title-label').type('{ctrl+a}Sample')
        cy.get('#scarface-review-text-card-title').type('{ctrl+a}Test review')
        cy.get("[type='button']").contains('Submit').click()

        cy.url().should('include','thankyou')
        cy.get('#react-app').should('contain.text','Review submitted - Thank you!')

    })


    it('Login_Add-new-address',function()
    {
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn('9840756827','Amlan@420')

        cy.get('#nav-hamburger-menu').click()

        cy.get('.hmenu-item').contains('Your Account').click()
        cy.get('body').should('include.text','Your Account')//assert your accounts page
        cy.get('body').contains('Your Addresses').click()

        cy.get('#ya-myab-plus-address-icon').click()
        cy.get('body').should('include.text','Add a new address')//assert the add address page

        e.getCountry().select('India',{force: true})

        cy.get('#address-ui-widgets-enterAddressFullName').type('Amlan dummy',{force: true})
        cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('9840756888')
        cy.get('#address-ui-widgets-enterAddressPostalCode').type('560076')
        cy.get('#address-ui-widgets-enterAddressLine1').type('Olive Nest, BTM 6th, Arekere')
        cy.get('#address-ui-widgets-enterAddressLine2').type('Bangalore')
        cy.get('#address-ui-widgets-landmark').type('Opp to Baskin')
        cy.get('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId').select('KARNATAKA',{force: true})
        cy.get('#address-ui-widgets-use-as-my-default').check({force: true}).should('be.checked')
        
        e.getDropdwn().click()
        cy.get('#dropdown1_1').click()
        e.getAddrbtn().click()
        
        cy.get('body').should('include.text','Address saved')
        cy.url().should('include','AddressSucceed') 

       /* cy.get('#ya-myab-address-delete-btn-0').click()
        cy.window().focus().click({force: true})
        cy.get('#ya-myab-address-delete-btn-0').click()
        cy.get('input[type="submit"]').click() 

        cy.get('body').should('include.text','Address deleted')
        cy.url().should('include','deleteAddressSuccess')
    })

    it('Login_Navigate-add-products-best-sellers',function(){
    var opt = 3

    cy.visit('/')
    e.getSigninbox().click()
    cy.SignIn('9840756827','Amlan@420')

    e.getBestSellers().click()
    cy.selectProd();

    cy.url().should('include','B08P5LWSS3')
    cy.get('body').should('include.text','WILDHORN® Carter Leather Wallet for Men (Black Croco)')

    cy.get('#selectQuantity').invoke("removeAttr",'display')
    cy.get('.a-column > .a-dropdown-container > #quantity').select(opt).should('have.value',opt+1)

    //Compare if the products added match the number shown in the cart
    var c1,c2,res;
    cy.get('#nav-cart-count').then(($btn) => {
        const count =$btn.text()
        c1 = Number(count)      
    }).then(function(){
        cy.log('Initial products in the cart:' + c1)
    })//before adding

    cy.get('#add-to-cart-button').click()// Add to Cart

    cy.get('#nav-cart-count').then(($btn) => {
        const count =$btn.text()
        c2 = Number(count)    
        res=c2-c1
        if(res==(opt+1))
        {
            cy.log("Products added to the carts match the quantity") 
        }
    }).then(function(){
        cy.log('Total products:'+c2+' and '+'New products added:'+ res)
    })//after adding 
  
        cy.get('body').should('include.text','Added to Cart')
        cy.url().should('include','cart')

    })

    **/

