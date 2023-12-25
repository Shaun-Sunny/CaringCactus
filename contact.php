<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $location = $_POST["location"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "macetheg@gmail.com";

    // Set the subject of the email
    $subject = "New Contact Form Submission";

    // Build the email message
    $email_message = "Name: $name\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Location: $location\n";
    $email_message .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $email_message);

    // You can redirect the user to a thank-you page if needed
    header("Location: thank_you.html");
    exit();
}
?>
