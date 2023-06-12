var databaseUrl = "mongodb://127.0.0.1:27017/Miniproject";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);

console.log("Connected");
exports.fetchUser = function(sname) {
    console.log('fetching user from Mongo');
    db.users.find({ name:sname }).then(person => {
        if (person) {
          console.log('Name:', person.name);
          console.log('Book ID:', person.bookId);
          console.log('Address:', person.address);
        } else {
          console.log('Person not found.');
        }
    });
}