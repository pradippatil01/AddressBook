/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : AddressBook using Javascript
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : AddressBook.js
*   @version   : v15.6.0
***************************************************************************/
const addressBook = require('./AddressBookManage');
const readline = require('readline-sync');
var input;
console.log(' Welcome to AddressBook ');
do {
    console.log("\n 1.Add Details:\n", "2.Display Details:\n", "3.Delete Details:\n", "4.Edit Details:\n", "5.Find person:\n", "6.Sorting:\n");
    let ch = readline.questionInt('Enter your choice:');
    switch (ch) {
        case 1:
            addressBook.addPerson();
            break;
    }
    input = readline.question('Do you want to continue? (Y/N)')
} while (input == 'Y' || input == 'y');