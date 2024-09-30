// src/AddressBook.js

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setAddress(address);
        this.setCity(city);
        this.setState(state);
        this.setZip(zip);
        this.setPhone(phone);
        this.setEmail(email);
    }

    setFirstName(firstName) {
        const regex = /^[A-Z][a-z]{2,}$/; // First letter capital, minimum 3 characters
        if (!regex.test(firstName)) {
            throw new Error('Invalid first name. It should start with a capital letter and have at least 3 characters.');
        }
        this.firstName = firstName;
    }

    setLastName(lastName) {
        const regex = /^[A-Z][a-z]{2,}$/; // First letter capital, minimum 3 characters
        if (!regex.test(lastName)) {
            throw new Error('Invalid last name. It should start with a capital letter and have at least 3 characters.');
        }
        this.lastName = lastName;
    }

    setAddress(address) {
        if (address.length < 4) {
            throw new Error('Address must be at least 4 characters long.');
        }
        this.address = address;
    }

    setCity(city) {
        if (city.length < 4) {
            throw new Error('City must be at least 4 characters long.');
        }
        this.city = city;
    }

    setState(state) {
        if (state.length < 4) {
            throw new Error('State must be at least 4 characters long.');
        }
        this.state = state;
    }

    setZip(zip) {
        const regex = /^\d{5}$/; // Example for a 5-digit zip code
        if (!regex.test(zip)) {
            throw new Error('Invalid zip code. It should be a 5-digit number.');
        }
        this.zip = zip;
    }

    setPhone(phone) {
        const regex = /^\d{10}$/; // Example for a 10-digit phone number
        if (!regex.test(phone)) {
            throw new Error('Invalid phone number. It should be a 10-digit number.');
        }
        this.phone = phone;
    }

    setEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
        if (!regex.test(email)) {
            throw new Error('Invalid email address.');
        }
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

module.exports = { Contact, AddressBook };
