class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    listContacts() {
        return this.contacts;
    }

    removeContactByName(firstName, lastName) {
        const index = this.contacts.findIndex(contact =>
            contact.firstName === firstName && contact.lastName === lastName
        );
        
        if (index !== -1) {
            this.contacts.splice(index, 1);  // Remove the contact from the array
            return true;
        } else {
            throw new Error('Contact not found.');
        }
    }

    // Method to count the number of contacts in the address book
    countContacts() {
        return this.contacts.length;
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

    // Other methods for managing address books
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

    // Add methods for updating details if needed
}
module.exports = {  Contact, AddressBookManager };