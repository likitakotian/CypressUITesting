import { faker } from "@faker-js/faker";

export default class  TestUtils{
    
 generateRandomName(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomName = '';

    for (let i = 0; i < length; i++) {
        randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomName;
}

generateRandomEmail() {
    const domain = 'example.com'; // Change this to your desired domain
    const username = faker.person.firstName(); // Adjust length as needed
    return `${username}@${domain}`;
}
}