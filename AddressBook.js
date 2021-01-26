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
const prompt = require('prompt-sync')();
var input;
console.log(' Welcome to AddressBook ');
do {
    console.log("\n 1.Add Details:\n", "2.Edit Details:\n", "3.Delete Details:\n",
        "4.show Books:\n", "5.create Book:\n", "6.Sorting:\n", "7.Find Person\n");
    let ch = readline.questionInt('Enter your choice:');
    switch (ch) {
        case 1:
            addressBook.addPerson();
            break;
        case 2:
            addressBook.editPerson();
            break;
        case 3:
            addressBook.deletePerson();
            break;
        case 4:
            addressBook.showBooks();
            break;
        case 5:
            addressBook.createBook();
            break;
        case 6:
            addressBook.sorting();
            break;
        case 7:
            addressBook.findPerson();
            break;
    }
    input = prompt('Do you want to continue? (Y/N)')
} while (input == 'Y' || input == 'y');