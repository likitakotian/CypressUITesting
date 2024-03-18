/// <reference types = "Cypress" />

import { faker } from "@faker-js/faker";

export default class Payment {
    constructor() {
        this.title = '.heading';
        this.cardName = '[data-qa="name-on-card"]'
        this.cardNumber = '[data-qa="card-number"]'
        this.cvv = '[data-qa="cvc"]'
        this.expiry = '[data-qa="expiry-month"]'
        this.expriryYear = '[data-qa="expiry-year"]'
        this.payButton = '[data-qa="pay-button"]'
        this.orderPlaced = '[data-qa="order-placed"] > b'
    }

    makePayment() {
        cy.get(this.title).should('be.visible').and('have.text', "Payment");
        cy.get(this.cardName).type(faker.finance.currencyName());
        cy.get(this.cardNumber).type(faker.finance.creditCardIssuer());
        cy.fixture("example.json").then((data) => {
            cy.get(this.cvv).type(data.cvv);
            cy.get(this.expiry).type(data.expiryMonthdata)
            cy.get(this.expriryYear).type(data.expriyYeardata);
        })
        cy.get(this.payButton).click();
        cy.get(this.orderPlaced).should('be.visible').and('have.text', "Order Placed!");
    }
}