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
    /**
    * @usecase3 edit contact  
    */
    editPerson = () => {
        var flag = 0;
        var path = filePath + 'AddressBook.csv';
        readWrite.readFromBook(path).then((csvData) => {
            var fname = readline.question('Enter name to edit : ');
            var file = fs.openSync(path, 'w');
            var personDataHeader = ['firstName', 'lastName', 'city', 'state', 'zipCode', 'phoneNumber', 'email\n'];
            fs.writeFileSync(file, personDataHeader.toString());
            for (let i = 0; i < csvData.length; i++) {
                if (csvData[i].firstName == fname) {
                    let city = readline.question('Enter your City : ');
                    csvData[i].city = city;
                    let state = readline.question('Enter your State name : ');
                    csvData[i].state = state;
                    let zipCode = readline.question('Enter your ZipCode name : ');
                    csvData[i].zipCode = zipCode;
                    var personData = new person(csvData[i].firstName, csvData[i].lastName, csvData[i].city, csvData[i].state, csvData[i].zipCode, csvData[i].phoneNumber, csvData[i].email);
                    fs.writeFileSync(file, personData.toString());
                    console.log('data updated sucessfully..')
                    flag++;
                } else {
                    let personData = new person(csvData[i].firstName, csvData[i].lastName, csvData[i].city, csvData[i].state, csvData[i].zipCode, csvData[i].phoneNumber, csvData[i].email);
                    fs.writeFileSync(file, personData.toString());
                }
            }
            if (flag === 0) {
                console.log('Data not found');
            }
            fs.closeSync(file);
        }).catch((message) => {
            console.log(message.message);
        })
    }

    deletePerson = () => {
        var flag = 0;
        var path = filePath + 'AddressBook.csv';
        readWrite.readFromBook(path).then((csvData) => {
            var fname = readline.question('Enter name to delete : ');
            var file = fs.openSync(path, 'w');
            var personDataHeader = ['firstName', 'lastName', 'city', 'state', 'zipCode', 'phoneNumber', 'email\n'];
            fs.writeFileSync(file, personDataHeader.toString());
            for (let i = 0; i < csvData.length; i++) {
                if (csvData[i].firstName == fname) {
                    flag++;
                    console.log('data deleted sucessfully..');
                } else {
                    let personData = new person(csvData[i].firstName, csvData[i].lastName, csvData[i].city, csvData[i].state, csvData[i].zipCode, csvData[i].phoneNumber, csvData[i].email);
                    fs.writeFileSync(file, personData.toString());
                }
            }
            if (flag === 0) {
                console.log('Data not found');
            }
            fs.closeSync(file);
        }).catch((message) => {
            console.log(message.message);
        })
    }
}
module.exports = new AddressBook;

