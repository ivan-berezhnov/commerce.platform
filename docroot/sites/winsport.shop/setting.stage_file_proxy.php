<?php

/**
 * @file
 * File proxy settings file.
 */

if (php_sapi_name() != 'cli') {
  if (strpos($_SERVER['HTTP_HOST'], 'winsport.shop') === FALSE) {
    $config['stage_file_proxy.settings']['origin'] = 'http://winsport.shop/';
  }
}
