<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "sandrine@juliettewilliamson.online";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Contact Submission", $message . ' - ' . $subject, "From:" . $email);
    
    header('Location: http://juliettewilliamson.online/success.html');
  }