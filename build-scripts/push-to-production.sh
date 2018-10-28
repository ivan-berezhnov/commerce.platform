#!/usr/bin/env bash
HOME="/commerce8.shop/www"

PROJECT="CommercePlatform"


DATE=`date '+%Y-%m-%d %H:%M:%S'`

rsync -avz --delete-before --exclude-from $HOME/$PROJECT/".rsynkignore" $HOME/$PROJECT/* "$HOME/$PROJECT-pant/"
cd "$HOME/$PROJECT-pant"
git pull
git add --all .
git commit -m "Push to pantheon $DATE"
git push origin master -f

