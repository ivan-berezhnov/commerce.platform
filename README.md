# COMMERCE Platform

Experimental Docksal build

Virtualhost: `http://shop.docksal/`
PMA: `http://pma.shop.docksal/`


### Development stack

* We are using Docksal as developer local env.
* Make sure you have latest Docksal installed: https://docksal.io/installation 
* About Docksal + documentation: https://docksal.readthedocs.io/en/master/
* Git clone into Docksal project directory. Specified during installation or in 
`DOCKSAL_NFS_PATH` variable in `~/.Docksal/docksal.env` configuration file
* Your docksal projects should be under docksal NFS path.


### First start
In project root folder execute commands:
* `fin p start`
*  if your Docksal VM is not yet started it will ask you.
* `fin dbs`
* If your terminus key would be installed correctly you will see green message.
* `fin rebuild`
* Wait till finish. First time it takes 10-15 minutes for downloading of the database. 
* If everything is ok, your project would be available at http://shop.docksal/

### Install git pre-commit hook

```
$ cp scripts/pre-commit.sh .git/hooks/pre-commit
$ chmod +x .git/hooks/pre-commit
```

### Files clone
We use stage_file_proxy to proxy files from staging to local. 

### Drush usage

`fin drush (command)`

**Examples:**
 
* Cache Rebuild -         `$ fin drush cr`
* Configuration export -  `$ fin drush cex` 
* Configuration import -  `$ fin drush cim`

### Run composer in the server
`/usr/local/php71/bin/php -d memory_limit=128M ./tmp/composer.phar install`