
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

    removeContact(email) {
        this.contacts = this.contacts.filter(contact => contact.email !== email);
    }

    // Find contact by first and last name
    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName === firstName && contact.lastName === lastName
        );
    }

    // Edit contact's details if found
    editContact(firstName, lastName, newDetails) {
        const contact = this.findContactByName(firstName, lastName);
        if (contact) {
            if (newDetails.firstName) contact.setFirstName(newDetails.firstName);
            if (newDetails.lastName) contact.setLastName(newDetails.lastName);
            if (newDetails.address) contact.setAddress(newDetails.address);
            if (newDetails.city) contact.setCity(newDetails.city);
            if (newDetails.state) contact.setState(newDetails.state);
            if (newDetails.zip) contact.setZip(newDetails.zip);
            if (newDetails.phone) contact.setPhone(newDetails.phone);
            if (newDetails.email) contact.setEmail(newDetails.email);
            return contact;
        } else {
            throw new Error('Contact not found.');
        }
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

module.exports = {  Contact,AddressBook,AddressBookManager };
