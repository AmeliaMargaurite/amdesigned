<?php

include_once(dirname(__DIR__, 1) . '/php/config.php');

use GuzzleHttp\Client;

$base_url = $_SERVER['HTTP_HOST'] === 'localhost:3001' ? 'http://127.0.0.1:8000/' : 'https://www.access.amdesigned.com.au/';

$img_path = $base_url . 'storage/gallery/';
$api_addon = 'api/articles';

if (isset($_SERVER['QUERY_STRING'])) {
	$uri_parts = explode('uri=', $_SERVER["QUERY_STRING"]);

	if ($uri_parts && !empty($uri_parts[0])) {
		$filter = '/?' . htmlspecialchars($uri_parts[0]);
		$api_addon .= $filter;
	}
}

$client = new Client();
$res = $client->get($base_url . $api_addon);
$articles = json_decode($res->getBody());
?>