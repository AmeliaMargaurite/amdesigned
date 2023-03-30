<?php
$local = '/localhost'; // localhost 
session_start();
define('IS_LIVE', getenv("ENVIRONMENT") === 'production');
define('HOME_PATH', IS_LIVE ? '' : $local); // Used in url paths
define('HOME_URL', IS_LIVE ? '/' : $local); // Used for a direct link to home only

define('ROOTPATH', dirname(__DIR__, 1));

define('VENDOR_AUTOLOAD', dirname(__DIR__, 2) . '/vendor/autoload.php');

# DOT ENV / ENVIRONMENT VARIABLES

include_once(VENDOR_AUTOLOAD);

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(dirname(__DIR__, 2));

if ($dotenv) {
  $dotenv->load();
}

// INCLUDES
define('SEND_WITH_PHP_MAILER', ROOTPATH . '/php/send-with-PHP-mailer.php');