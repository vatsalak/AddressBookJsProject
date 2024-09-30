// index.js
const { Contact, AddressBookManager } = require('./AddressBook.js');

const addressBookManager = new AddressBookManager();

// Create a new Address Book called "Personal Contacts"
const personalContacts = addressBookManager.createAddressBook('Personal Contacts');

try {
    // Add some contacts
    personalContacts.addContact(new Contact('John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62701', '5551234567', 'john.doe@example.com'));
    personalContacts.addContact(new Contact('Alice', 'Smith', '456 Oak St', 'Springfield', 'IL', '62702', '5557654321', 'alice.smith@example.com'));

    console.log("Contacts before deletion:", personalContacts.listContacts());

    // Delete a contact by name
    personalContacts.removeContactByName('John', 'Doe');

    console.log("Contacts after deletion:", personalContacts.listContacts());
} catch (error) {
    console.error(error.message);
}
