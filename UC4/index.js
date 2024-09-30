// index.js
const { Contact, AddressBookManager } = require('./AddressBook.js');

const addressBookManager = new AddressBookManager();

// Create a new Address Book called "Personal Contacts"
const personalContacts = addressBookManager.createAddressBook('Personal Contacts');

try {
    // Add contacts to the address book
    personalContacts.addContact(new Contact('John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62701', '5551234567', 'john.doe@example.com'));
    personalContacts.addContact(new Contact('Alice', 'Smith', '456 Oak St', 'Springfield', 'IL', '62702', '5557654321', 'alice.smith@example.com'));

    console.log("Before editing:", personalContacts.listContacts());

    // Find and edit contact by name
    personalContacts.editContact('John', 'Doe', {
        address: '789 Pine St',
        city: 'Metropolis',
        state: 'NY',
        zip: '10001',
        phone: '5559876543',
        email: 'john.doe@newmail.com'
    });

    console.log("After editing:", personalContacts.listContacts());
} catch (error) {
    console.error(error.message);
}
