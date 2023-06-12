const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/Miniproject'; // Replace with your MongoDB connection string

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Access the database and collection
  const db = client.db('Miniproject'); // Replace with your database name
  const collection = db.collection('users'); // Replace with your collection name

  // Perform the database query
  collection.find({}).toArray((err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Fetched data:', results);

    // Process the fetched data
    // You can send the fetched data to the client or perform any desired operations

    // Close the database connection
    client.close((err) => {
      if (err) {
        console.error('Error closing database connection:', err);
        return;
      }
      console.log('Database connection closed.');
    });
  });
});
