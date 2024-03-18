discribe('http method', () => {
    it('GET call', () => {
        cy.request({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts",
            qs: { page: 2 }
        })
            .then((response) => {
                expect(response.status).to.be(200)
            })
    })

    it("Post call", () => {
        const requestbody = {
            title: "test",
            body: "test body",
            userId: 90
        }
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestbody
        })
            .then((response) => {
                expecxt(response.status).to.be(201)
                expect(response.title).to.be(requestbody.title)
                expect(response.userId).to.be(requestbody.userId)
            })
    })

    it("Post call with fixture", () => {
        cy.fixture('example.json').then((data) => {
            const requestbody = data;

            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: requestbody
            })
                .then((response) => {
                    expecxt(response.status).to.be(201)
                    expect(response.title).to.be(requestbody.title)
                    expect(response.userId).to.be(requestbody.userId)
                })

        })

    })

    it("delete call", () => {
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/90"
        })
            .its('status')
            .should('equal', 204)
    })
})

let authtoken = null
before("generate the auth token", () => {
    cy.request({
        method: "POST",
        url: "",
        body: {},
    }).then((response) => {
        authtoken = response.token;
    })

    it("Post call with fixture", () => {
        cy.fixture('example.json').then((data) => {
            const requestbody = data;

            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                header: {
                    'content type': '*/*',
                    "Authorization": "Bearer " + authtoken
                },
                body: requestbody
            })
                .then((response) => {
                    expecxt(response.status).to.be(201)
                    expect(response.title).to.be(requestbody.title)
                    expect(response.userId).to.be(requestbody.userId)
                })
        })
    })
})