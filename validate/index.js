// src/index.js

const { Contact, AddressBook } = require('./AddressBook.js');

const myAddressBook = new AddressBook();

try {
    myAddressBook.addContact(new Contact('John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62701', '5551234567', 'john.doe@example.com'));
    myAddressBook.addContact(new Contact('Jane', 'Smith', '456 Oak St', 'Springfield', 'IL', '62702', '5557654321', 'jane.smith@example.com'));
    console.log("Contacts List:", myAddressBook.listContacts());
} catch (error) {
    console.error(error.message);
}

// Test invalid contact
try {
    myAddressBook.addContact(new Contact('jo', 'doe', '123', 'NY', 'NY', '1234', '555123', 'invalid-email'));
} catch (error) {
    console.error('Failed to add contact:', error.message);
}
