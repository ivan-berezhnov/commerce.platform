<?php
chdir(getenv('HOME') . '/code/web');

print "\n 1. Enable cache modules...\n";
passthru('drush en dynamic_page_cache page_cache -y 2>&1');
passthru('drush pmu devel -y 2>&1');
