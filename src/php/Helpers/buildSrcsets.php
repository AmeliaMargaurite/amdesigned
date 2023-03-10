<?php


function buildSrcsets(string $img_path, string $filename, array $sizes, string $ext)
{
	$srcset_arr = [];

	foreach ($sizes as $size_name => $width) {
		$srcset_arr[] = $img_path . $size_name . $filename . $ext . ' ' . $width;
	}

	return implode(',', $srcset_arr);
}
?>