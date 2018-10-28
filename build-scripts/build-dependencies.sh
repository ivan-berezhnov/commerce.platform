#!/usr/bin/env bash

HOME="/commerce8.shop/www"
PROJECT="CommercePlatform"

echo "Git pull..."
cd $HOME/$PROJECT
git pull

echo "Building JS/CSS..."
cd $HOME/$PROJECT/docroot/themes/tooll
npm install
node_modules/gulp/bin/gulp.js build
cd $HOME/$PROJECT/docroot/themes/tooll
npm install
node_modules/gulp/bin/gulp.js build
echo "DONE: Building JS/CSS"

# Build the the composer
cd $HOME/$PROJECT
echo "Build the the composer dependencies..."
composer install
echo "DONE: Build the the composer dependencies..."

#Probably we are done ).
echo "All done!"
exit 0
