<?php

/**
 * @file
 * File proxy settings file.
 */

if (php_sapi_name() != 'cli') {
  if (strpos($_SERVER['HTTP_HOST'], 'tooll.shop') === FALSE) {
    $config['stage_file_proxy.settings']['origin'] = 'http://tooll.shop/';
  }
}
