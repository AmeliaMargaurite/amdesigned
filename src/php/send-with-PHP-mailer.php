<?php
include_once(__DIR__ . '/config.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function setUpMailServer()
{
  // PHPMailer object
// true enables exceptions
  $mail = new PHPMailer(true);
  // $mail->SMTPDebug = 3;
  if (!IS_LIVE) {
    $mail->isSMTP();
    $mail->Host = $_ENV['MAIL_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['MAIL_USERNAME'];
    $mail->Password = $_ENV['MAIL_PASSWORD'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port = $_ENV['MAIL_PORT'];
  }
  $mail->From = $_ENV['SITE_EMAIL'];
  $mail->FromName = $_ENV['SITE_NAME'];
  return $mail;
}

function sendToSiteOwner()
{
  $mail = setUpMailServer();
  $form_subject = htmlspecialchars($_POST['subject']);
  $user_name = htmlspecialchars($_POST['name']);
  $user_email = htmlspecialchars($_POST['email']);
  $user_message = htmlspecialchars($_POST['message']);
  $package_type = htmlspecialchars(isset($_POST['package-type']) ? $_POST['package-type'] : null);
  $services_array = $_POST['services'];
  $title = 'Services enquiry from ' . $user_name;
  $preview = 'You\'ve received an online enquiry from ' . $user_name .

    $site_email = $_ENV['SITE_EMAIL'];

  // To address and name
  $mail->addAddress($site_email, 'Site Contact Form');

  // Replies go to this address and name
  $mail->addReplyTo($user_email, $user_name);

  // Send as HTML (as opposed to Plain Text)
  $mail->isHTML(true);

  // 
  $subject = 'A message from ' . $_ENV['SITE_NAME'];
  $mail->Subject = $subject;

  $services_list = '';
  foreach ($services_array as $service) {
    $services_list .= '<p margin="8px 16px";>' . $service . '</p>';
  }

  $template = file_get_contents('../mjml/services-enquiry.php');

  $variables = [
    'title' => $title,
    'preview' => $preview,
    'user_name' => $user_name,
    'user_email' => $user_email,
    'user_message' => $user_message,
    'services_list' => $services_list
  ];


  foreach ($variables as $key => $value) {
    $template = str_replace('{{ ' . $key . ' }}', $value, $template);
  }

  // Body message
  $mail->Body = $template;

  // Plain Text Version of message
  $mail->AltBody = 'The following message was submitted from ' . $user_name . ': ' . $user_message;

  try {
    $mail->send();
  } catch (Exception $e) {
    error_log("Error: " . $e->getMessage());

    return $e->getMessage();
  }

}

// function sendConfirmationToSender()
// {

//   $mail = setUpMailServer();

//   $errors = [];

//   $user_name = htmlspecialchars($_POST['name']);
//   $user_email = htmlspecialchars($_POST['email']);
//   $user_message = htmlspecialchars($_POST['message']);

//   $site_email = $_ENV['SITE_EMAIL'];
//   $site_from = 'Site Contact Form';
//   $site_name = $_ENV['SITE_NAME'];

//   // To address and name
//   $mail->addAddress($user_email, $user_name);

//   // Replies go to this address and name
//   $mail->addReplyTo($site_email, $site_name);

//   // Send as HTML (as opposed to Plain Text)
//   $mail->isHTML(true);

//   // 
//   $subject = "Confirmation of form submitted on $site_name.";
//   $mail->Subject = $subject;

//   $message = "
//     <html>
//       <head>
//         <title>$subject</title>
//       </head>

//       <body>
//         <p>Hi $user_name, 
//         <p>Thank you for submitting the following message on our website:</p>
//         <p>
//           <em>
//             $user_message
//           </em>
//         </p>
//         <p>We will get back to you with a reply within 1-3 business days</p>
//       </body>
//     </html>
//   ";

//   // Body message
//   $mail->Body = $message;

//   // Plain Text Version of message
//   $mail->AltBody = "Hi $user_name, thank you for submitting the following message on our website: $user_message. We will get back to you with a reply within 1-3 business days.";

//   try {
//     $mail->send();
//   } catch (Exception $e) {
//     return $e;
//   }

// }