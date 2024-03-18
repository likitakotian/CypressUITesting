/// <reference types = "Cypress" />
describe("API testing for automation practices website", () => {

    it("Register the new user ", () => {
        cy.createNewUser(); //this api has some issue
    });


    it("get all exixting product list ", () => {
        cy.getAllProducts().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.exist;
            expect(response.body).to.have.property("products");
            expect(response.body.products).to.be.an("array");
            expect(response.body.products).to.have.lengthOf.at.least(1);
            expect(response.body.products[0]).to.include({ id: 1, name: "Blue Top", price: "Rs. 500", brand: "Polo" });
            expect(response.body.products[0].price).to.equal("Rs. 500");
            expect(response.body.products[0].price).to.be.at.least("Rs. 400");
            expect(response.body.products[0].category).to.have.property("usertype");
            expect(response.body.products[0].category).to.deep.equal({ usertype: { usertype: "Women" }, category: "Tops" });
        })
    })

    it("get all brand list", ()=>{
        cy.getAllBrandList().should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.headers).to.exist;
            expect(response.body).to.exist;
            expect(response.body).to.have.property("brands");
            expect(response.body.brands[0]).to.include({ id: 1, brand: "Polo" });
            expect(response.body.brands[0].brand).to.equal("Polo");
            expect(response.body.brands[0].id).to.be.at.least(1);
            expect(response.body.brands[0].brand).to.match(/[A-Za-z\s&]+/);
            expect(response.body.brands[0].id).to.satisfy((id) => id > 0);
            expect(response.body.brands[0].id).to.be.within(1, 100);
        })
    })



});