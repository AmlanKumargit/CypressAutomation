import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })
    it('Login_Create-a-wishlist', function(){
        
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn(this.data.number, this.data.password)//LOGIN

        e.getSigninbox().trigger('mouseover')
        e.getwishlist().click({force: true})

        cy.get('#a-popover-header-1').should('have.text','Create a new list')
        cy.url().should('include','wishlist')

        const uuid = () => Cypress._.random(0, 1e6) //genrating random number
        const id = uuid()  
        const test = `{backspace}test${id}`
        cy.get('#list-name').type(test)
        e.getformsubmit().contains('Create List').click({force: true})
        cy.get("#profile-list-name").should('include.text',id)


    })

})