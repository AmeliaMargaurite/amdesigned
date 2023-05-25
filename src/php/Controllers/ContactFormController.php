<?php
namespace App\Controllers;

include_once(dirname(__DIR__, 1) . '/config.php');
include_once(SEND_WITH_PHP_MAILER);

/**
 * Summary of ContactFormController
 * Basic Contact Form which can be extended
 */
class ContactFormController extends FormController
{
  public $inputFields = [
    ['name' => 'pot', 'type' => 'empty', 'required' => false],
    ['name' => 'name', 'type' => 'string', 'required' => true],
    ['name' => 'email', 'type' => 'email', 'required' => true],
    ['name' => 'message', 'type' => 'string', 'required' => true],
    ['name' => 'subject', 'type' => 'string', 'required' => false],
    ['name' => 'package_type', 'type' => 'string', 'required' => false],
    ['name' => 'services', 'type' => 'string_array', 'required' => true]
  ];
  public $name;
  public $email;
  public $message;
  public $subject;
  public $package_type;
  public $services;

  public function sendForm()
  {
    $errors = [];

    // Build services display
    $services_array = $_POST['services'];

    $services_list = '';
    foreach ($services_array as $service) {
      $services_list .= '<p margin="8px 16px";>' . $service . '</p>';
    }

    $title = 'Services enquiry from ' . $this->name;
    $preview = 'You\'ve received an online enquiry from ' . $this->name;

    $template_variables = [
      'title' => $title,
      'preview' => $preview,
      'user_name' => $this->name,
      'user_email' => $this->email,
      'user_message' => $this->message,
      'services_list' => $services_list
    ];

    $email_template = file_get_contents(MJML_FOLDER . 'services-enquiry.php');

    foreach ($template_variables as $key => $value) {
      echo $key . '<br/>';

      $email_template = str_replace('{{ ' . $key . ' }}', $value, $email_template);
    }

    $email_to = new \MailTo;
    $email_to->address = $_ENV['SITE_EMAIL'];
    $email_to->name = 'Site Contact Form';

    $reply_to = new \MailTo;
    $reply_to->address = $this->email;
    $reply_to->name = $this->name;

    $siteOwnerError = sendToSiteOwner(email_body: $email_template, subject: $this->subject, reply_to: $reply_to, email_to: $email_to);

    if ($siteOwnerError) {
      $errors['failed_submit'] = $siteOwnerError;
    }

    if (count($errors) > 0) {
      return $errors;
    }
  }

}