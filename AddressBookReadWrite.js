const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const filePath = './resource/';
const fs = require('fs');

class ReadAndWriteInBook {
    writeInBook = (data) => {
        var file = fs.openSync(filePath + 'AddressBook.csv', 'a');
        fs.writeFileSync(file, data.toString());
        fs.closeSync(file);
    }
}

module.exports = new ReadAndWriteInBook;
