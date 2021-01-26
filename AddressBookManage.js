const readline = require('readline-sync');
const fs = require('fs');
const filePath = './resource/';
const person = require('./Person');
const readWrite = require('./AddressBookReadWrite');

class AddressBook {
    /**
     * @usecase1 create contact  
     */
    addPerson = () => {
        let firstName = readline.question('Enter your First Name:');
        let lastName = readline.question('Enter your last name : ');
        let city = readline.question('Enter your City : ');
        let state = readline.question('Enter your State name : ');
        let zipCode = readline.question('Enter your ZipCode name : ');
        let phoneNumber = readline.question('Enter your Phone Number : ');
        let email = readline.question('Enter your Email name : ');
        var personData = new person(firstName, lastName, city, state, zipCode, phoneNumber, email);
        readWrite.writeInBook(personData.toString())
    }

}

module.exports = new AddressBook;

