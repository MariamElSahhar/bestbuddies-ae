<?php
    $to = "hello@bestbuddies.ae";
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['$number'];
    
    $message = $_POST['message'];
    
    $subject = "Website Form Submission From ".$name;
    $body = "
        Name: $name\n
        Phone Number: $number\n
        Email: $email\n
        Message: $message";

    mail($to, $subject, $body);
?>
