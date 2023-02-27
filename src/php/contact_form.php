<?php

if (empty($_SESSION['token'])) {
  $_SESSION['token'] = bin2hex(random_bytes(32));
}
$token = $_SESSION['token'];
$inputs = ['subject' => null, 'name' => null, 'email' => null, 'message' => null];

if (isset($_SESSION['contact_form'])) {

  foreach ($inputs as $key => $input) {
    if (isset($_SESSION['contact_form'][$key])) {
      $inputs[$key] = htmlspecialchars($_SESSION['contact_form'][$key]);
    }
  }

  unset($_SESSION['contact_form']);
}
?>