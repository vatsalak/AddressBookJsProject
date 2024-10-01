const AddressBook = require('./AddressBook');
const Contact = require('./Contact');

const addressBook = new AddressBook();

// Add some contacts to the address book
addressBook.addContact(new Contact("John", "Doe", "123 Elm St", "Springfield", "IL", "62701", "5551234567", "john.doe@example.com"));
addressBook.addContact(new Contact("Alice", "Smith", "456 Oak St", "Chicago", "IL", "62702", "5557654321", "alice.smith@example.com"));
addressBook.addContact(new Contact("Bob", "Brown", "789 Pine St", "Austin", "TX", "73301", "5559876543", "bob.brown@example.com"));
addressBook.addContact(new Contact("Charlie", "Davis", "321 Birch St", "Chicago", "IL", "62703", "5556549873", "charlie.davis@example.com"));

// Print sorted contacts by name
console.log("Contacts sorted by name:");
addressBook.printSortedContacts();
