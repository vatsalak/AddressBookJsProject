// index.js
const { Contact, AddressBookManager } = require('./AddressBook.js');

const addressBookManager = new AddressBookManager();

// Create a new Address Book called "Personal Contacts"
const personalContacts = addressBookManager.createAddressBook('Personal Contacts');

try {
    // Add some contacts
    personalContacts.addContact(new Contact('John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62701', '5551234567', 'john.doe@example.com'));
    personalContacts.addContact(new Contact('Alice', 'Smith', '456 Oak St', 'Chicago', 'IL', '62702', '5557654321', 'alice.smith@example.com'));
    personalContacts.addContact(new Contact('Bob', 'Brown', '789 Pine St', 'Austin', 'TX', '73301', '5559876543', 'bob.brown@example.com'));
    personalContacts.addContact(new Contact('Charlie', 'Davis', '321 Birch St', 'Chicago', 'IL', '62703', '5556549873', 'charlie.davis@example.com'));

    // Count contacts by city
    const contactCountByCity = personalContacts.countContactsByCity();
    console.log("Number of Contacts by City:", contactCountByCity);

    // Count contacts by state
    const contactCountByState = personalContacts.countContactsByState();
    console.log("Number of Contacts by State:", contactCountByState);

} catch (error) {
    console.error(error.message);
}
