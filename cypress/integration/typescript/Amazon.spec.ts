import { eq } from "../../../node_modules/cypress/types/lodash/index"
import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()
    
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
        cy.get('#address-ui-widgets-enterAddressLine1').type('Arekere, BTM 6th Stage')
        cy.get('#address-ui-widgets-enterAddressLine2').type('Bangalore')
        cy.get('#address-ui-widgets-landmark').type('Opp to Baskin Robins')
        cy.get('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId').select('KARNATAKA',{force: true})
        cy.get('#address-ui-widgets-use-as-my-default').check({force: true}).should('be.checked')
        cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text').click()
        cy.get('#dropdown1_1').click()
        e.getAddrbtn().click()
        

    })
})

