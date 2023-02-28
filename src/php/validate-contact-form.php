<?php

use App\Controllers\ContactFormController;


include_once('./config.php');

function exitWithFailure(array $messages)
{
  $url = $_SERVER['REQUEST_URI'];
  $url_parts = parse_url($url);
  parse_str($url_parts['query'], $params);

  $buildQueries = null;

  foreach ($messages as $key => $message) {
    if ($buildQueries) {
      $buildQueries .= '&' . $key . '=' . $message;
    } else {
      $buildQueries = '?' . $key . '=' . $message;
    }
    error_log($message, 0);
  }

  $url = $params['back'] ? $params['back'] : '/error';

  if ($buildQueries) {
    $url .= $buildQueries;
  }

  redirectTo($url);
}

if (
  $_SERVER['REQUEST_METHOD'] === 'POST'
  && isset($_POST['submit'])
  && !empty($_POST['submit'])
) {

  // Check for correct token
  if (!empty($_POST['token'] && isset($_SESSION['token']))) {
    if (!hash_equals($_SESSION['token'], $_POST['token'])) {
      exitWithFailure(['contact-form' => '001-a: Form submitted incorrectly']);
    }
  } else {
    exitWithFailure(['contact-form' => '001-b: Form submitted incorrectly']);
  }

  $contact_form = new ContactFormController('contact_form');
  $errors = $contact_form->checkFields([
    ['name' => 'pot', 'type' => 'empty', 'required' => false],
    ['name' => 'name', 'type' => 'string', 'required' => true],
    ['name' => 'email', 'type' => 'email', 'required' => true],
    ['name' => 'message', 'type' => 'string', 'required' => true],
    ['name' => 'subject', 'type' => 'string', 'required' => false],
    ['name' => 'package_type', 'type' => 'string', 'required' => false],
    ['name' => 'services', 'type' => 'string_array', 'required' => true]
  ]);

  if ($errors && count($errors) > 0) {
    exitWithFailure($errors);
  } else {
    $sendContactForm_errors = $contact_form->sendForm();

    if ($sendContactForm_errors && count($sendContactForm_errors) > 0) {
      $errors[array_key_first($sendContactForm_errors)] += $sendContactForm_errors[0];
      exitWithFailure($errors);

    } else {
      redirectTo('/confirmation');
    }
  }
} else {
  // use id of form as key to allow error warnings to appear
  exitWithFailure(['contact-form' => '002: Form submitted incorrectly']);
}