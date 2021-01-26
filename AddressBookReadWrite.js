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
        var csvDataArray=[]
        var csvData = csv.readCsvSync(path);
        for(let i=0;i<csvData.length;i++){
            csvDataArray.push(csvData[i]);
        }
        return csvDataArray;
    }
}

module.exports = new ReadAndWriteInBook;
