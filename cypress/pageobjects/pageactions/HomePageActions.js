/// <reference types="cypress" />

import HomePageElements from '../pageelements/HomePageElements'

export default class HomePageActions{

    constructor(){
        globalThis.element=new HomePageElements()
    }


    navigateToUrl(){

        cy.visit('')
    }

    validateTitle(){

        return cy.title()
    }

    loginAsBankManager(){

        element.bankManagerLoginBtn().click()

    }

    loginAsCustomer(){

        element.customerLoginBtn().click()

    }


}