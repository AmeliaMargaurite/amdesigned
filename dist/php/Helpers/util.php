<?php
function dd(...$args)
{
  foreach ($args as $arg) {
    var_dump($arg);
    echo '<br/>';
  }
  die();
}