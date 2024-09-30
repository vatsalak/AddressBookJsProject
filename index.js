// src/index.js

const { Contact, AddressBook } = require('./AddressBook.js'); // Use require instead of import

const myAddressBook = new AddressBook();

// Example usage
myAddressBook.addContact(new Contact('John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62701', '555-1234', 'john.doe@example.com'));
myAddressBook.addContact(new Contact('Jane', 'Smith', '456 Oak St', 'Springfield', 'IL', '62702', '555-5678', 'jane.smith@example.com'));

console.log("Contacts List:", myAddressBook.listContacts());
