<?php

include_once('../php/config.php');

use GuzzleHttp\Client;

$article = null;
$uri_parts = explode('uri=', $_SERVER["QUERY_STRING"]);

if (count($uri_parts) > 0 && !empty($uri_parts[1])) {
  $article_slug = $uri_parts[1];

  $base_url = $_SERVER['HTTP_HOST'] === 'localhost:3001' ? 'http://127.0.0.1:8000/' : 'https://www.access.amdesigned.com.au/';

  $img_url = $base_url . 'storage/gallery/';
  $api_addon = 'api/articles';

  $client = new Client();
  $res = $client->get($base_url . $api_addon . '/' . $article_slug);

  $article = json_decode($res->getBody());

  if ($article && getType($article) === 'array' && count($article)) {
    $article = $article[0];
  }
}
?>