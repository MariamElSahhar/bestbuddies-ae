<?php
require_once "../../config/config.php";

$dbusername = getenv("DB_USERNAME");
$dbpassword = getenv("DB_PASSWORD");
$dbhost = getenv("DB_HOST");
$dbname = getenv("DB_NAME");

$dsn = "mysql:host=".$dbhost.";dbname=".$dbname;

try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
}