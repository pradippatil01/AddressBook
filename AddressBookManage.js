const readline = require('readline-sync');
const fs = require('fs');
const filePath = './resourse/';
class AddressBook {
    /**
     * @usecase1 create contact  
     */
    addPerson = () => {
        var file = fs.openSync(filePath+'AddressBook.json', 'a')
        let firstName = readline.question('Enter your First Name:');
        let lastName = readline.question('Enter your last name : ');
        let city = readline.question('Enter your City : ');
        let state = readline.question('Enter your State name : ');
        let zipCode = readline.question('Enter your ZipCode name : ');
        let phoneNumber = readline.question('Enter your Phone Number : ');
        let email = readline.question('Enter your Email name : ');
        let personData = {
            fname: firstName,
            lname: lastName,
            city: city,
            state: state,
            zipCode: zipCode,
            phoneNumber: phoneNumber,
            email: email
        };
        let jsonData = JSON.stringify(personData, null, 2);
        console.log(jsonData)
        fs.writeFileSync(file, jsonData);
    }
}

module.exports = new AddressBook;

