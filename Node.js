const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Miniproject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a schema for person details
const personSchema = new mongoose.Schema({
  name: String,
  bookId: Number,
  address: String
});

// Define a model based on the schema
const Person = mongoose.model('Person', personSchema);

// Find a particular person by name
const searchName = 'Hari';
users.findOne({ name: searchName })
  .then(person => {
    if (person) {
      console.log('Name:', person.name);
      console.log('Book ID:', person.bookId);
      console.log('Address:', person.address);
    } else {
      console.log('Person not found.');
    }
    mongoose.disconnect(); // Disconnect from the database
  })
  .catch(err => console.error('Error retrieving person details', err));
