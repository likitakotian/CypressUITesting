/// <reference types = "Cypress" />

import { faker } from "@faker-js/faker";
import TestUtils from "../utils/TestUtils";


export default class SignUp {
    constructor() {
        this.userFullname = faker.person.firstName();
        this.userEmailId = faker.person.firstName() + '@gmail.com';
        this.password = faker.internet.password();
        this.userFirstName = faker.person.firstName();
        this.userLastName = faker.person.lastName();
        this.userCompanyName = faker.company.name()
        this.userAddress = faker.location.streetAddress();
        this.userSecondAddress = faker.location.secondaryAddress();
        this.userName = '[data-qa="signup-name"]';
        this.userEmail = '[data-qa="signup-email"]';
        this.signUpButton = '[data-qa="signup-button"]';
        this.loginOrSignUpButton = '.shop-menu > .nav > :nth-child(4) > a';
        this.accountInfoLable = ':nth-child(1) > b';
        this.mrTitle = '#id_gender1';
        this.mrsTitle = '#id_gender2';
        this.name = '[data-qa="name"]';
        this.email = '[data-qa="email"]';
        this.password = '[data-qa="password"]';
        this.day = '#days';
        this.month = '#months';
        this.year = "#years";
        this.newsLetterCheckBox = "#newsletter";
        this.optinCheckBox = "#optin";
        this.accountInfo = ".login-form > form >div"
        this.addressInfoLabel = 'form > .title > b';
        this.firstName = '[data-qa="first_name"]';
        this.lastName = '[data-qa="last_name"]';
        this.companyname = '[data-qa="company"]';
        this.address1 = '[data-qa="address"]';
        this.address2 = '[data-qa="address2"]';
        this.country = '#country';
        this.state = '#state';
        this.city = '#city';
        this.zipcode = '#zipcode';
        this.mobile_number = '#mobile_number';
        this.create_account_button = '[data-qa="create-account"]';
        this.accountCreatedText = 'b';
        this.continueButton = '[data-qa="continue-button"]';
        this.logOutButton = '.shop-menu > .nav > :nth-child(4) > a'

    }

    setUserName(userName) {
        cy.get(this.userName).type(userName);
    }

    setUserEmail(userEmail) {
        cy.get(this.userEmail).type(userEmail)
    }

    clickOnSingUp() {
        cy.get(this.signUpButton).click();
    }

    prepareForSignUp() {
        const utils = new TestUtils();
        cy.get(this.loginOrSignUpButton).click();
        this.setUserName(this.userFullname);
        this.setUserEmail(this.userEmailId)
        this.clickOnSingUp();
        cy.title().should('eq', "Automation Exercise - Signup")
        cy.get(this.accountInfoLable).should('have.text', "Enter Account Information")
    }

    enterAccountInfo() {
        cy.get(this.mrsTitle).check().should('be.checked');
        cy.get(this.name).should('be.visible').should('have.value', this.userFullname)
        cy.get(this.email).should('be.visible').should('have.value', this.userEmailId)
        cy.get(this.password).type(this.password);
        cy.get(this.day).select("10").should('have.value', "10");
        cy.get(this.month).select("10").should('have.value', "10").and('contain.text', "October");
        cy.get(this.year).select("2020").should('have.value', "2020");
        cy.get(this.newsLetterCheckBox).should('not.be.checked');
        cy.get(this.optinCheckBox).check().should('be.checked')
        cy.get(this.accountInfo).should('have.length', 7)
    }

    enterAddressInfo() {
        cy.get(this.firstName).type(this.userFirstName);
        cy.get(this.lastName).type(this.userLastName);
        cy.get(this.companyname).type(this.userCompanyName);
        cy.get(this.address1).type(this.userAddress);
        cy.get(this.address2).type(this.userSecondAddress);
        cy.get(this.country).then((select) => {
            const options = select.find('option');
            const randomIndex = Cypress._.random(1, options.length - 1);
            const randomCountry = options[randomIndex].value;
            cy.get(this.country).select(randomCountry).should('have.value', randomCountry);
        })
        cy.get(this.state).type(faker.location.state())
        cy.get(this.city).type(faker.location.city())
        cy.get(this.zipcode).type(faker.location.zipCode())
        cy.get(this.mobile_number).type(faker.phone.number())
        cy.get(this.create_account_button).click()
        cy.get(this.accountCreatedText).should('have.text', "Account Created!");
        cy.get(this.continueButton).click();
        cy.get(this.logOutButton).should('be.visible')
    }

}