<?php

include_once('../php/config.php');

use GuzzleHttp\Client;

$article = null;
$article_slug = null;
if (IS_LIVE) {
  $uri_parts = explode('uri=', $_SERVER["QUERY_STRING"]);
  if (count($uri_parts) > 0 && !empty($uri_parts[1])) {
    $article_slug = '/' . htmlspecialchars($uri_parts[1]);
  }
} else {
  $article_slug = htmlspecialchars($_SERVER['PATH_INFO']);

}

if ($article_slug) {
  $base_url = $_SERVER['HTTP_HOST'] === 'localhost:3001' ? 'http://127.0.0.1:8000/' : 'https://www.access.amdesigned.com.au/';

  $img_url = $base_url . 'storage/gallery/';
  $api_addon = 'api/articles';
  $url = $base_url . $api_addon . $article_slug;

  $client = new Client();
  $res = $client->get($url);

  $article = json_decode($res->getBody());

  if ($article && getType($article) === 'array' && count($article)) {
    $article = $article[0];
  }
}
?>