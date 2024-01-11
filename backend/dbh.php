<?php
// connects to database


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // get credentials from config file
    require_once "../../config/config.php";

    // get env vars from config file
    $dbusername = getenv("DB_USERNAME");
    $dbpassword = getenv("DB_PASSWORD");
    $dbhost = getenv("DB_HOST");
    $dbname = getenv("DB_NAME");

    $dsn = "mysql:host=".$dbhost.";dbname=".$dbname;

    $pdo = null;
    // connects via pdo (PHP Data Object)
    try {
        $pdo = new PDO($dsn, $dbusername, $dbpassword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Connection failed: ".$e->getMessage();
        header("Location: ../index.html");
    }
}
else {
    header("Location: index.html");
}