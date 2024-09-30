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
        const regex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!regex.test(firstName)) {
            throw new Error('Invalid first name. It should start with a capital letter and have at least 3 characters.');
        }
        this.firstName = firstName;
    }

    setLastName(lastName) {
        const regex = /^[A-Z][a-zA-Z]{2,}$/;
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
        const regex = /^[0-9]{5,6}$/;
        if (!regex.test(zip)) {
            throw new Error('Invalid zip code. Must be 5 or 6 digits.');
        }
        this.zip = zip;
    }

    setPhone(phone) {
        const regex = /^[0-9]{10}$/;
        if (!regex.test(phone)) {
            throw new Error('Invalid phone number. Must be exactly 10 digits.');
        }
        this.phone = phone;
    }

    setEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            throw new Error('Invalid email format.');
        }
        this.email = email;
    }
}
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

    listAddressBooks() {
        return this.addressBooks.map(book => book.name);
    }

    getAddressBook(name) {
        return this.addressBooks.find(book => book.name === name);
    }
}
module.exports = { Contact, AddressBook, AddressBookManager };