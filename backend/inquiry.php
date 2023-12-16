<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = htmlspecialchars( $_POST['name'] );
        $email = htmlspecialchars( $_POST['email'] );
        $number = htmlspecialchars( $_POST['number'] );
        $message = htmlspecialchars( $_POST['message'] );
        
        $to = "hello@bestbuddies.ae";
        $subject = "Website Form Submission From ".$name;
        $body = "
            Name: $name\n
            Phone Number: $number\n
            Email: $email\n
            Message: $message";
        
        mail($to, $subject, $body);

    }
    else {
        header("Location: index.html");
    }
?>
