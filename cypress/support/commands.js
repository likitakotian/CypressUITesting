/// <reference types = "Cypress" />

import { accountRequest } from '../e2e/common/be/request/AccountRequest'

Cypress.Commands.add('createNewUser', () => {
    cy.request({
        method: 'POST',
        //url: 'https://automationexercise.com/api/createAccount',
        url: Cypress.env('baseUrl') + 'api/createAccount',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountRequest),
    }).then((response) => {
        console.log("body is ...." +JSON.stringify(accountRequest))
        expect(response.status).to.eq(200)
        console.log("response is ..."+ response);
    })

    Cypress.Commands.add('getAllProducts', ()=>{
        cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl')+'api/productsList',
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            return response;
        })
        
    })

    Cypress.Commands.add('getAllBrandList', ()=>{
        cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl')+'api/brandsList',
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            return response;
        })
        
    })
   
})