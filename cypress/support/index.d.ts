



declare namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
         SignIn(phone: string, password:string): Chainable<Element>
         selectProd(): Chainable<Element>
         removeProd(): Chainable<Element>
         selectbabyProd(babyproductName: string): Chainable <Element>
      }
    }
  