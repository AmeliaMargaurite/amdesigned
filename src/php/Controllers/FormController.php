<?php
namespace App\Controllers;

use Error;

include_once(SEND_WITH_PHP_MAILER);

/**
 * Summary of ContactFormController
 * Basic Contact Form which can be extended
 */
abstract class FormController
{
  public $inputFields = [];
  public function __construct($type)
  {

    $ignore = ['pot', 'token', 'submit'];
    foreach ($_POST as $key => $val) {
      if (!in_array($key, $ignore)) {
        if (isset($_POST[$key]) && !empty($_POST[$key])) {
          $this->$key = $val;
          if (gettype($val) === 'array') {
            $_SESSION[$type][$key] = $val;
          } else {
            $_SESSION[$type][$key] = htmlspecialchars($val);

          }


        } else {
          $this->$key = null;
          $_SESSION[$type][$key] = null;
        }
      }

      // dd($key);

    }
  }
  /**
   * $fields = [
   *  ['name' => 'name', 'type' => 'string']
   * ]
   */

  abstract public function sendForm();

  public function checkFields()
  {

    $errors = [];

    if (!isset($this->inputFields)) {
      throw new Error('Variable $inputFields has not been set');
    }

    foreach ($this->inputFields as $field) {
      $fieldName = $field['name'];

      // need to send through test to run (string vs email)
      if (isset($this->$fieldName) && $this->$fieldName !== null) {

        // Check if type string
        if ($field['type'] === 'string') {
          $error = $this->validateString($this->$fieldName, $fieldName);
          if ($error) {
            // use fieldName (which is also the input id) as key to allow 
            // error warnings to appear
            $errors[$fieldName] = $error;
          }
        }

        if ($field['type'] === 'string_array') {
          $error = $this->validateStringArray($this->$fieldName, $fieldName);
          if ($error) {
            $errors[$fieldName] = $error;
          }
        }

        // Check if type email
        if ($field['type'] === 'email') {
          $error = $this->validateEmail($this->$fieldName, $fieldName);
          if ($error) {
            // use fieldName (which is also the input id) as key to allow 
            // error warnings to appear
            $errors[$fieldName] = $error;
          }
        }
        // Check honey pot
      } else if ($field['type'] === 'empty') {
        if (!empty($this->$fieldName)) {
          // use fieldName (which is also the input id) as key to allow 
          // error warnings to appear
          $errors[$fieldName] = $fieldName . ' is not ' . $field['type'];
        }
      } else if ($field['required'] === true) {
        // use fieldName (which is also the input id) as key to allow 
        // error warnings to appear
        $errors[$fieldName] = $fieldName . ' data missing.';
      }
    }
    if (count($errors) > 0) {
      return $errors;
    }

  }

  private function validateString($input, $fieldName)
  {
    $pattern = "/[\[\]\=\<\>`]/m";
    if (!is_string($input) || preg_match_all($pattern, $input)) {
      return "{$fieldName} failed validation";
    }
  }

  private function validateStringArray($array, $fieldName)
  {
    foreach ($array as $key => $val) {
      if ($key === $val) {
        $error = $this->validateString($val, $fieldName);
        if ($error) {
          return $error;
        }
      }
    }
  }

  private function validateEmail($input, $fieldName)
  {
    // ensure this only contains one email address
    $email = explode(',', $input);
    if (count($email) > 1) {
      return "Email address is malformed";
    }

    if (!filter_var($input, FILTER_VALIDATE_EMAIL)) {
      return "{$fieldName} failed email validation";
    }
  }

}