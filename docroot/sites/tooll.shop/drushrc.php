<?php

$env = 'staging';

if (file_exists("$app_root/sites/.env")) {
  $env = trim(file_get_contents($app_root . '/sites/' . '.env'));
}

if ($env == 'dev') {
  $options['uri'] = 'https://tooll.shop.docksal';
} elseif ($env == 'staging') {
  $options['uri'] = 'https://staging.tooll.shop';
} else {
  $options['uri'] = 'https://tooll.shop';
}
