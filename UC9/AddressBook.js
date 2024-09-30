class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    checkDuplicateContact(firstName, lastName) {
        return this.contacts.filter(contact =>
            contact.firstName === firstName && contact.lastName === lastName
        ).length > 0;
    }

    addContact(contact) {
        if (!this.checkDuplicateContact(contact.firstName, contact.lastName)) {
            this.contacts.push(contact);
        } else {
            throw new Error('Duplicate contact found! Contact not added.');
        }
    }

    listContacts() {
        return this.contacts;
    }

    removeContactByName(firstName, lastName) {
        const index = this.contacts.findIndex(contact =>
            contact.firstName === firstName && contact.lastName === lastName
        );
        
        if (index !== -1) {
            this.contacts.splice(index, 1);
            return true;
        } else {
            throw new Error('Contact not found.');
        }
    }

    countContacts() {
        return this.contacts.length;
    }

    // Method to group contacts by city
    groupContactsByCity() {
        return this.contacts.reduce((grouped, contact) => {
            if (!grouped[contact.city]) {
                grouped[contact.city] = [];
            }
            grouped[contact.city].push(contact);
            return grouped;
        }, {});
    }

    // Method to group contacts by state
    groupContactsByState() {
        return this.contacts.reduce((grouped, contact) => {
            if (!grouped[contact.state]) {
                grouped[contact.state] = [];
            }
            grouped[contact.state].push(contact);
            return grouped;
        }, {});
    }
}
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}
class AddressBookManager {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook(name) {
        const newAddressBook = new AddressBook(name);
        this.addressBooks.push(newAddressBook);
        return newAddressBook;
    }
}

module.exports = { Contact, AddressBookManager };