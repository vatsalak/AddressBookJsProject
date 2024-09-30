// src/index.js
const { Contact, AddressBookManager } = require('./AddressBook.js');

const addressBookManager = new AddressBookManager();

// Create a new Address Book called "Personal Contacts"
const personalContacts = addressBookManager.createAddressBook('Personal Contacts');

try {
    personalContacts.addContact(new Contact('John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62701', '5551234567', 'john.doe@example.com'));
    personalContacts.addContact(new Contact('Alice', 'Smith', '456 Oak St', 'Springfield', 'IL', '62702', '5557654321', 'alice.smith@example.com'));
    console.log("Contacts in Personal Contacts:", personalContacts.listContacts());
} catch (error) {
    console.error(error.message);
}

// Create another Address Book called "Work Contacts"
const workContacts = addressBookManager.createAddressBook('Work Contacts');

try {
    workContacts.addContact(new Contact('Bob', 'Brown', '789 Pine St', 'Metropolis', 'NY', '10001', '5559876543', 'bob.brown@work.com'));
    console.log("Contacts in Work Contacts:", workContacts.listContacts());
} catch (error) {
    console.error(error.message);
}

// List all Address Books
console.log("All Address Books:", addressBookManager.listAddressBooks());
