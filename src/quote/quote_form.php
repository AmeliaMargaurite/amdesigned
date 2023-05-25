<?php


if (empty($_SESSION['token'])) {
	$_SESSION['token'] = bin2hex(random_bytes(32));
}

$token = $_SESSION['token'];
$inputs = [];
if (isset($_SESSION['quote_form'])) {
	foreach ($_SESSION['quote_form'] as $key => $input) {
		if (gettype($input) === "array") {
			foreach ($input as $item_key => $item) {
				$inputs[$key][htmlspecialchars($item)] = true;
			}

		} else {
			$inputs[$key] = htmlspecialchars($input ?? '');
		}
	}

	unset($_SESSION['quote_form']);
}
?>