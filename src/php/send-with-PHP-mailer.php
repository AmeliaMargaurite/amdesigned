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

/**
 * Function to send a templated email to the website owner
 * Email contains details about form submitted
 * @param string $email_body
 * @param string $subject
 * @param MailTo $reply_to
 * @param MailTo $email_to
 * @return string|void
 */
function sendToSiteOwner($email_body, $subject, $reply_to, $email_to)
{
  $mail = setUpMailServer();


  // To address and name
  $mail->addAddress($email_to->address, $email_to->name);

  // Replies go to this address and name
  $mail->addReplyTo($reply_to->address, $reply_to->name);

  // Send as HTML (as opposed to Plain Text)
  $mail->isHTML(true);

  // 
  $mail->Subject = $subject;

  // Body message
  $mail->Body = $email_body;

  // Plain Text Version of message
  // $mail->AltBody = 'The following message was submitted from ' . $user_name . ': ' . $user_message;

  try {
    $mail->send();
  } catch (Exception $e) {
    error_log("Error: " . $e->getMessage());

    return $e->getMessage();
  }

}

class MailTo
{
  public string $address;
  public string $name;
}