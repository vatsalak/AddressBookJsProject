const Contact = require('./Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    // Sort by city
    sortByCity() {
        return this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    }

    // Sort by state
    sortByState() {
        return this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    }

    // Sort by zip code
    sortByZip() {
        return this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    }

    // Print sorted contacts
    printSortedContacts(sortedContacts) {
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }
}

module.exports = AddressBook;
