import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })
    it('Login_Search', function(){
    
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn(this.data.number, this.data.password)
    
        //Assert logged in userprofile
        cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Amlan') 
        cy.get('#nav-link-accountList-nav-line-1').should('not.have.text','Hello, Sign in')
    
        //search_Autocomplete
        cy.get('#twotabsearchtextbox').type('One plus')
        cy.getOnePlus9Pro()// Select One Plus 9 pro
        cy.get('#twotabsearchtextbox').should('have.value', 'one pluse9 pro')

        //SelectProduct
        e.getOnePlus().each(($e1,index,$list)=>{
            if($e1.text().includes(this.data.phone))
            {
                e.getOnePlus().eq(index).invoke('removeAttr','target').click()
            } 
          })

          cy.get('#productTitle').then(function(ele){
              if(ele.text().includes(this.data.phone))
              {
                  cy.log('Product successfully selected')
              }
              else
              {
                cy.log('Product not selected')
              }
          })
    
    })

})