const { faker } = require("@faker-js/faker");

var title = ["Mr", "Mrs", "Miss"];
var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

const accountRequest = {
    name: faker.person.fullName(),
    email: faker.person.firstName() + '@gmail.com',
    password: faker.internet.password(),
    title: title[Math.floor(Math.random() * title.length)],
    birth_date: faker.date.birthdate(),
    birth_month: month[Math.floor(Math.random() * title.length)],
    birth_year: "2019",
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.location.country(),
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number()
};
export { accountRequest };