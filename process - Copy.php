<?php
$servername = "localhost";
$username = "root";
$password = "mk8328";
$dbname = "samplehtml";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$name = $_POST["name"];
$email = $_POST["email"];

// Insert data into database
$sql = "INSERT INTO login (name, email) VALUES ('$name', '$email')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>