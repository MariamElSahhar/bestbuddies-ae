<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $number = $_POST["number"];
    $email = $_POST["email"];

    try {
        // connect to database
        require_once("dbh.php");

        // sql statement
        $query = "INSERT INTO newsletter_signups (first_name, last_name, phone_number, email) VALUES (:first_name, :last_name, :phone_number, :email);";

        // query is submitted to database
        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":first_name", $first_name);
        $stmt->bindParam(":last_name", $last_name);
        $stmt->bindParam(":phone_number", $number);
        $stmt->bindParam(":email", $email);
        
        // data is submitted to query
        $stmt->execute();

        // best practice to free resources, close connections
        $pdo = null;
        $stmt = null;
        
        // closes connections
        die();
    }
    catch (PDOException $e) {
        die("Query failed: ". $e->getMessage());
    }
}
else {
    header("Location: ../index.html");
}