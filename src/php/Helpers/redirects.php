<?php
namespace App\Helpers;

class Redirects
{
  static function to(string $path)
  {
    header('Location: ' . $path);
  }

  static function home()
  {
    header('Location: /');
  }

  static function notFound()
  {
    header('Location: /notFound404');
  }

}