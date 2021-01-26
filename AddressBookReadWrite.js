const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const filePath = './resource/';
const fs = require('fs');
const csv = require('csv-parser');

class ReadAndWriteInBook {
    writeInBook = (path,data) => {
        var file = fs.openSync(path, 'a');
        fs.writeFileSync(file, data.toString());
        fs.closeSync(file);
        console.log('data saved sucessfully...')
    }

    readFromBook = (path) => {
        var csvData=[]
        return new Promise(function (resolve, reject) {
            /* check file present or not on path*/
            if (fs.existsSync(path)) {
                const content = fs.readFileSync(path, { encoding: 'utf-8' })
                if (content.length !== 0) {
                    if (content.includes(',')) {
                        fs.createReadStream(path).pipe(csv())
                            .on('data', (data) => {
                                csvData.push(data);
                            })
                            .on('end', () => {
                                resolve(csvData)
                            })
                    } else {
                        reject(new Error('File is empty'));
                    }
                } else {
                    reject(new Error('Extension Incorrect'));
                }
            } else {
                reject(new Error('No Such File'));
            }
        })
    }
}

module.exports = new ReadAndWriteInBook;
