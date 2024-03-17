import SignUp from "../../pages/SignUp";


describe('Login to the webpage', ()=>{
     const signUp = new SignUp();

    it('Signing to the website', ()=>{
        cy.visit("https://automationexercise.com/");
        signUp.prepareForSignUp();
        signUp.enterAccountInfo();
        signUp.enterAddressInfo();
    })

    //@TODO add negative tests
})