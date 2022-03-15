/// <reference types="cypress" />

describe('Dashboard', function(){

    it('webtables', function(){

   
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>{
            const text = $e1.text()
            if(text.includes("JMETER"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })
            }

        })

    })

})