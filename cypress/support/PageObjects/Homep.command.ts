class Homep
{
    getSigninbox()
    {
        const newLocal = cy.get('#nav-link-accountList');
        return newLocal
    }
    getOrders()
    {
        return cy.get('#nav-orders')
    }
    getCountry()
    {
        return cy.get('#address-ui-widgets-countryCode-dropdown-nativeId')
    }
    getIndia()
    {
        return cy.get('#address-ui-widgets-countryCode-dropdown-nativeId_102')
    }
    getAddrbtn()
    {
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
    }
    getDropdwn()
    {
        return  cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text')
    }
    getBestSellers()
    {
        return  cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]')
    }
    getGiftcard()
    {
        return  cy.get('[href="/gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc"]')
    }
    getColleaguecard()
    {
        return  cy.get('img[src="https://images-eu.ssl-images-amazon.com/images/I/4157mnyJiKL.jpg"')
    }
    getCart()
    {
        return  cy.get('[href="/gp/cart/view.html?ref_=sw_gtc"]')
    }
    getLang()
    {
        return  cy.get('#icp-nav-flyout')
    }
    getRadiobtn()
    {
        return cy.get('input[type="radio"]')
    }
    getLangbtn()
    {
        return cy.get('#icp-save-button-announce')
    }
    getCountr()
    {
        return cy.get('#icp-flyout-mkt-change')
    }
    getSubmitbtn()
    {
        return cy.get('input[type="submit"]')
    }
    getwishlist()
    {
        return cy.get('[href="/hz/wishlist/ls?triggerElementID=createList&ref_=nav_ListFlyout_navFlyout_createList_lv_redirect"]')
    }
    getformsubmit()
    {
        return cy.get('#create-list-form > .a-form-actions')
    }
    getBabywishlist()
    {
        return cy.get('[href="/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br"]')
    }
    getTablenamecol()
    {
        return cy.get('tr td:nth-child(1)')
    }
}
export default Homep;
