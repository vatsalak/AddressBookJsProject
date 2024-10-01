//const Contact = require('./Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    // Sort contacts alphabetically by first name and then by last name
    sortContactsByName() {
        return this.contacts.sort((a, b) => {
            if (a.firstName === b.firstName) {
                return a.lastName.localeCompare(b.lastName);
            }
            return a.firstName.localeCompare(b.firstName);
        });
    }

    printSortedContacts() {
        const sortedContacts = this.sortContactsByName();
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }
}

module.exports = AddressBook;
