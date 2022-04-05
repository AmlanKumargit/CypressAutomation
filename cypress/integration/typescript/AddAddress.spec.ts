import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })
    it('Login_Add-new-address',function()
    {
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn(this.data.number, this.data.password)

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

        cy.get('#ya-myab-address-delete-btn-0').click()
        cy.window().click({force: true})
        cy.get('#ya-myab-address-delete-btn-0').click()
        cy.get('input[type="submit"]').click() 

        cy.get('body').should('include.text','Address deleted')
        cy.url().should('include','deleteAddressSuccess')
    })

})