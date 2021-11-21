#!/usr/bin/env bash

rm -rf doc/* && webpack --config webpack.config.doc.js
git checkout gh-pages
mv -f doc/* .
git add .
git commit -m 'update'
git push
git checkout -


