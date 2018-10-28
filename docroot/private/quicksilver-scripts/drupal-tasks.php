<?php
chdir(getenv('HOME') . '/code/web');

print "\n====== Running Drupal tasks ======\n\n";
print "\n 1. Reset cache...\n";
passthru('drush cr 2>&1');
print "\n 2. Revert configs...\n";
passthru('drush cim -y 2>&1');
print "\n 3. Run DB updates...\n";
passthru('drush updb -y 2>&1');
print "\n 4. Update entities...\n";
passthru('drush entup -y 2>&1');
