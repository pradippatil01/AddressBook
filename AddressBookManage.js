const readline = require('readline-sync');
const fs = require('fs');
const filePath = './resource/';
const person = require('./Person');
const path = require('path');
const readWrite = require('./AddressBookReadWrite');

class AddressBook {
    /**
     * @usecase1 create contact  
     */
    addPerson = () => {
        var flag = 0;
        var bookName = this.showBooks();
        var path = filePath + bookName + '.csv';
        console.log(path)
        let number = readline.question('How many data you want to add: ');
        for (let i = 0; i < number; i++) {
            let firstName = readline.question('Enter your First Name:');
            let lastName = readline.question('Enter your last name : ');
            let city = readline.question('Enter your City : ');
            let state = readline.question('Enter your State name : ');
            let zipCode = readline.question('Enter your ZipCode name : ');
            let phoneNumber = readline.question('Enter your Phone Number : ');
            let email = readline.question('Enter your Email name : ');
            var personData = new person(firstName, lastName, city, state, zipCode, phoneNumber, email);
            var csvData = readWrite.readFromBook(path);
            for (let i = 0; i < csvData.length; i++) {
                if (csvData[i].PHONENUMBER == phoneNumber) {
                    flag++;
                }
            }
            if (flag > 0) {
                console.log('data already present..');
            } else {
                readWrite.writeInBook(path, personData.toString());
            }
        }
    }
    /**
    * @usecase3 edit contact  
    */
    editPerson = () => {
        var flag = 0;
        var bookName = this.showBooks();
        var path = filePath + bookName + '.csv';
        var csvData = readWrite.readFromBook(path);
        var fname = readline.question('Enter name to edit : ');
        var file = fs.openSync(path, 'w');
        var personDataHeader = ['FIRSTNAME', 'LASTNAME', 'CITY', 'STATE', 'ZIPCODE', 'PHONENUMBER', 'EMAIL\n'];
        fs.writeFileSync(file, personDataHeader.toString());
        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i].FIRSTNAME == fname) {
                let city = readline.question('Enter your City : ');
                csvData[i].CITY = city;
                let state = readline.question('Enter your State name : ');
                csvData[i].STATE = state;
                let zipCode = readline.question('Enter your ZipCode name : ');
                csvData[i].ZIPCODE = zipCode;
                let personData = new person(csvData[i].FIRSTNAME, csvData[i].LASTNAME, csvData[i].CITY, csvData[i].STATE, csvData[i].ZIPCODE, csvData[i].PHONENUMBER, csvData[i].EMAIL);
                fs.writeFileSync(file, personData.toString());
                console.log('data updated sucessfully..')
                flag++;
            } else {
                let personData = new person(csvData[i].FIRSTNAME, csvData[i].LASTNAME, csvData[i].CITY, csvData[i].STATE, csvData[i].ZIPCODE, csvData[i].PHONENUMBER, csvData[i].EMAIL);
                fs.writeFileSync(file, personData.toString());
            }
        }
        if (flag === 0) {
            console.log('Data not found');
        }
        fs.closeSync(file);
    }
    /**
     * @usecase4 Delete contact  
     */
    deletePerson = () => {
        var flag = 0;
        var bookName = this.showBooks();
        var path = filePath + bookName + '.csv';
        var csvData = readWrite.readFromBook(path);
        var fname = readline.question('Enter name to delete : ');
        var file = fs.openSync(path, 'w');
        var personDataHeader = ['FIRSTNAME', 'LASTNAME', 'CITY', 'STATE', 'ZIPCODE', 'PHONENUMBER', 'EMAIL\n'];
        fs.writeFileSync(file, personDataHeader.toString());
        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i].FIRSTNAME == fname) {
                flag++;
                console.log('data deleted sucessfully..');
            } else {
                let personData = new person(csvData[i].FIRSTNAME, csvData[i].LASTNAME, csvData[i].CITY, csvData[i].STATE, csvData[i].ZIPCODE, csvData[i].PHONENUMBER, csvData[i].EMAIL);
                fs.writeFileSync(file, personData.toString());
            }
        }
        if (flag === 0) {
            console.log('Data not found');
        }
        fs.closeSync(file);
    }
    /**
     * @usecase6 create multiple Book
     */
    createBook = () => {
        let bookName = readline.question('Enter Book Name: ');
        if (fs.existsSync(filePath + bookName + '.csv')) {
            console.log('File already created..!!');
        } else {
            var file = fs.openSync(filePath + bookName + '.csv', 'w');
            var personDataHeader = ['FIRSTNAME', 'LASTNAME', 'CITY', 'STATE', 'ZIPCODE', 'PHONENUMBER', 'EMAIL\n'];
            file = fs.writeFileSync(file, personDataHeader.toString());
        }
    }

    showBooks = () => {
        console.log('Book present in system ==>\n');
        const testFolder = filePath;
        const fs = require('fs');
        fs.readdirSync(testFolder).forEach(file => {
            console.log(file);
        });
        var book = readline.question('\nIn which u want to perform opeartion: ');
        return book;
    }
    /**
     * @usecase8 search person
     */
    findPerson = () => {
        var flag = 0;
        var bookName = this.showBooks();
        var path = filePath + bookName + '.csv';
        var csvData = readWrite.readFromBook(path);
        console.log('Enter deatils for search person ');
        var fname = readline.question('Enter name :');
        var city = readline.question('Enter city :');
        var state = readline.question('Enter state :');
        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i].FIRSTNAME == fname && csvData[i].CITY == city && csvData[i].STATE == state) {
                console.log('data found sucessfully..');
                console.log(csvData[i]);
                flag++;
            }
        }
        if (flag === 0) {
            console.log('Data not found');
        }
    }
    /**
     * @usecase11_12 sort data 
     */
    sorting = () => {
        var bookName = this.showBooks();
        var sortWay = readline.question('enter type of sort:');
        var typesort = sortWay.toUpperCase();
        var path = filePath + bookName + '.csv';
        var csvData = readWrite.readFromBook(path);
        csvData.sort((first, second) => {
            let nameA = first[typesort].toUpperCase(); // ignore upper and lowercase
            let nameB = second[typesort].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        console.log('Data after sort sucessfully..\n', csvData);
        var savetoJson = readline.question('do you want to save sort data in Json 1 for yes and 0 for no:');
        if (savetoJson == 1) {
            var jsonFile = filePath + bookName +typesort+'.json';
            var file = fs.openSync(jsonFile, 'w')
            let jsonData = JSON.stringify(csvData, null, 2);
            fs.writeFileSync(file, jsonData);
            console.log('converted sucessfully..')
            fs.closeSync(file);
        }else{
            console.log('ok thank you..');
        }
    }

    countPerson = () => {
        var bookName = this.showBooks();
        var path = filePath + bookName + '.csv';
        var csvData = readWrite.readFromBook(path);
        csvData.sort();
        var current = null
        var cnt = 0;
        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i] != current) {
                if (cnt > 0) {
                    console.log(current + ' comes --> ' + cnt + ' times');
                }
                current = csvData[i].STATE;
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
            console.log(current + ' comes --> ' + cnt + ' times');
        }
    }

    csvTOJson = () => {
        var bookName = this.showBooks();
        var path = filePath + bookName + '.csv';
        var csvData = readWrite.readFromBook(path);
        var jsonFile = filePath + bookName + '.json';
        var file = fs.openSync(jsonFile, 'w')
        let jsonData = JSON.stringify(csvData, null, 2);
        fs.writeFileSync(file, jsonData);
        console.log('converted sucessfully..')
        fs.closeSync(file);
    }
}
module.exports = new AddressBook;

