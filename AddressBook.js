// src/AddressBook.js

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

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    removeContact(email) {
        this.contacts = this.contacts.filter(contact => contact.email !== email);
    }

    listContacts() {
        return this.contacts;
    }

    findContact(email) {
        return this.contacts.find(contact => contact.email === email);
    }
}

module.exports = { Contact, AddressBook }; // Use module.exports instead of export
