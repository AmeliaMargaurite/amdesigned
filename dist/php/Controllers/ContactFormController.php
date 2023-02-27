<?php
namespace App\Controllers;

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
  public function __construct()
  {
    // check if pot is used, if so fail
    // check inputs are not empty
    // check email is email format
    // trust user is input all other inputs in correct format
    // but don't trust they're not malicious

    foreach ($_POST as $key => $val) {
      if (isset($_POST[$key]) && !empty($_POST[$key])) {
        $this->$key = $val;
        $_SESSION['contact_form'][$key] = $val;

      } else {
        $this->$key = null;
        $_SESSION['contact_form'][$key] = null;
      }
    }
  }
  /**
   * $fields = [
   *  ['name' => 'name', 'type' => 'string']
   * ]
   */

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