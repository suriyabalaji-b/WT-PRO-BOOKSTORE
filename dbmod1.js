var databaseUrl = "mongodb://127.0.0.1:27017/Miniproject";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);

console.log("Connected");

exports.saveUser = function(name, password, callback) {
    console.log('Saving user to mongo');
    db.Login.insert({ "username": name, "email": password }, function(err, saved) {
        if (err || !saved) {
            console.log(err);
            callback('Error occurred while saving user'); // Send an error message back to the client
        } else {
            console.log("User saved");
            callback('User saved successfully'); // Send a success message back to the client
        }
    });
};
exports.purchaseuser =  function(bookId,customerName,payment,address,phoneNumber) 
{
    console.log('Saving user order to mongo');
    db.users.insert({"BookID": bookId, "Customer Name": customerName,"Payment Status":payment,"Address":address,"Contact No": phoneNumber },function(err, saved) {
            if (err || !saved)
                console.log(err);
            else
                console.log("User Order saved");
            
        });
};
exports.registeruser =  function(cusmail,full_name,pass,confirm_password,Cus_address,country,mobile_number,pincode)
{
    console.log('Saving user order to mongo');
    db.registeruser.insert({"Customer_MailID": cusmail, "Customer Name": full_name,"Password":pass,"Confirm_Password":confirm_password,"Customer_Address": Cus_address,"Country":country,"Mobile_Number":mobile_number,"Pincode":pincode },function(err, saved) {
            if (err || !saved)
                console.log(err);
            else
                console.log("User Register saved");
            
        });
};
exports.contactadmin =  function(qname,conq)
{
    console.log('Saving user request to mongo');
    db.questions.insert({"Customer Name":qname,"Customer Question":conq },function(err, saved) {
            if (err || !saved)
                console.log(err);
            else
                console.log("User Register saved");
            
        });
};
exports.suggestadmin =  function(srname,rst)
{
    console.log('Saving user request to mongo');
    db.suggestusers.insert({"Customer Name":srname,"Customer Request":rst },function(err, saved) {
            if (err || !saved)
                console.log(err);
            else
                console.log("User Register saved");
            
        });
};

