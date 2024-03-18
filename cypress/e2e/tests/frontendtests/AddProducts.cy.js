
import Payment from "../../pages/Payment";
import Products from "../../pages/Products";
import SignUp from "../../pages/SignUp";
describe("Add some random product to the cart and checkout", () => {
    before(() => {
        const signUp = new SignUp();
        cy.visit("https://automationexercise.com/");
        signUp.prepareForSignUp();
        signUp.enterAccountInfo();
        signUp.enterAddressInfo();
    })

    const addItem = new Products();
    const pay = new Payment();

    it("Add random product to cart", () => {
        //add 5 items into cart
        addItem.addItesmsIntoCart();
        addItem.validateProductsIncart();
        addItem.validateCheckOutInfo();
        addItem.placeorder();
        pay.makePayment();
    })

    //@TODO add additonal and negative tests
})