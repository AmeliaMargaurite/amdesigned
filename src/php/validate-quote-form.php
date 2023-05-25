<?php

use App\Controllers\QuoteFormController;
use App\Helpers\Redirects;

include_once(__DIR__ . '/config.php');

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
  $_SESSION['quote_form_messages'] = $messages;
  Redirects::to($url);
}

if (
  $_SERVER['REQUEST_METHOD'] === 'POST'
  && isset($_POST['submit'])
  && !empty($_POST['submit'])
) {

  // Check for correct token
  if (!empty($_POST['token'] && isset($_SESSION['token']))) {
    if (!hash_equals($_SESSION['token'], $_POST['token'])) {
      exitWithFailure(['quote_form' => '001-a: Form submitted incorrectly']);
    }
  } else {
    exitWithFailure(['quote_form' => '001-b: Form submitted incorrectly']);
  }

  $quote_form = new QuoteFormController('quote_form');
  $errors = $quote_form->checkFields();

  if ($errors && count($errors) > 0) {
    exitWithFailure($errors);
  } else {
    $sendContactForm_errors = $quote_form->sendForm();

    if ($sendContactForm_errors && count($sendContactForm_errors) > 0) {
      $errors[array_key_first($sendContactForm_errors)] += $sendContactForm_errors[0];
      exitWithFailure($errors);

    } else {
      Redirects::to('/confirmation');
    }
  }
} else {
  // use id of form as key to allow error warnings to appear
  exitWithFailure(['quote_form' => '002: Form submitted incorrectly']);
}