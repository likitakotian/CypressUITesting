const Ajv = require('ajv')

const ajv = new Ajv();

describe("schema validation", () => {
    it("test1 ", () => {
        cy.request({
            method: 'GET',
            url: "",

        }).then((response) => {
            expect(response.status).to.be(200);
            //have a schema. json in util
            const schema = {} //hardcode
            const validate = ajv.compile(schema)
            const isvalid = validate(response.body)
            expect(isvalid).to.be(true)
            const postid = response.body[0].id
            return postid
        })
            .then((postid) => {
                cy.request({
                    method: 'GET',
                    url: `ndjfjfjfjfjfbhh?${postid}`
                })
                    .then((response) => {

                    })
            })
    })

})