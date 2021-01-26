const csv = require('csv-parser-sync-plus-promise');
const filePath = './resource/';
const fs = require('fs');

class ReadAndWriteInBook {
    writeInBook = (path, data) => {
        var file = fs.openSync(path, 'a');
        fs.writeFileSync(file, data.toString());
        fs.closeSync(file);
        console.log('data saved sucessfully...')
    }

    readFromBook = (path) => {
        var csvData = csv.readCsvSync(path);
        return csvData;
    }
}

module.exports = new ReadAndWriteInBook;
