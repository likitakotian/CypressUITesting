/// <reference types = "Cypress" />

import { expect } from "chai";

export default class  Products{
    constructor(){
        this.productButton = '.shop-menu > .nav > :nth-child(2) > a';
        this.features_items = '.features_items > .title';
        this.allItems = '.features_items >div >div >div>div>a';
        this.continueShopping = '.modal-footer > .btn';
        this.cartButton = '.shop-menu > .nav > :nth-child(3) > a'
        this.activePage = '.active';
        this.checkOutButton = '.col-sm-6 > .btn'
        this.cartInfo = '#cart_info';
        this.addedItems = '#cart_info_table>tbody>tr';
        this.addressDetails = ':nth-child(2) > .heading';
        this.deliveryAddress = '#address_delivery > .address_title > .page-subheading';
        this.billingAddress ='#address_invoice > .address_title > .page-subheading';
        this.reviewOrder = ':nth-child(4) > .heading';
        this.placeOrderButton = ':nth-child(7) > .btn';


    }

    addItesmsIntoCart() {
        cy.get(this.productButton).click();
        cy.get(this.features_items).scrollIntoView({duration:1000});
        cy.get(this.allItems).then ((item)=>{
            const totalItems = item.length;
            //click on random 5 item to the cart
            const randomIndices = Cypress._.sampleSize(Array.from(Array(totalItems).keys()), 5);
            randomIndices.forEach(index => {
                cy.wrap(item[index]).scrollIntoView().click();
                cy.get(this.continueShopping).click();
            });
        })
        cy.get(this.cartButton).click();
    }

    validateProductsIncart() {
        cy.get(this.activePage).should('be.visible').and('have.text', "Shopping Cart")
        cy.get(this.checkOutButton).should('be.visible').and ('have.text',"Proceed To Checkout");
        cy.get(this.cartInfo).should('be.visible');
        cy.get(this.addedItems).should('be.visible').and('have.length',5);
        cy.get(this.checkOutButton).click();
    }

    validateCheckOutInfo() {
        cy.get(this.activePage).should('be.visible').and('have.text', "Checkout")
        cy.get(this.addressDetails).should('be.visible')
        //expect(this.addressDetails.text()).to('eq',"Address Details");
        cy.get(this.deliveryAddress).should('be.visible').and('have.text','Your delivery address')
        //expect(this.deliveryAddress.text()).to,be("hdghghfgh")
        cy.get(this.billingAddress).should('be.visible').and('have.text', "Your billing address")
        //expect(this.billingAddress.text()).to.be('hghghfgh')
        cy.get(this.reviewOrder).should('be.visible').and('have.text', "Review Your Order")

    }

    placeorder() {
        cy.get(this.placeOrderButton).click();
    }


}