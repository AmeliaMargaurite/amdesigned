<?php
namespace App\Controllers;

include_once('../config.php');
include_once(SEND_WITH_PHP_MAILER);

/**
 * Summary of ContactFormController
 * Basic Contact Form which can be extended
 */
class ContactFormController extends FormController
{

  public $name;
  public $email;
  public $message;
  public $subject;
  public $package_type;
  public $services;

  public function sendForm()
  {
    $errors = [];
    $siteOwnerError = sendToSiteOwner();

    if ($siteOwnerError) {
      $errors['failed_submit'] = $siteOwnerError;
    }

    if (count($errors) > 0) {
      return $errors;
    }
  }

}