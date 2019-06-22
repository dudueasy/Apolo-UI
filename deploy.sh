# /usr/bin/env bash

if [ $1 ]
then
    npm version ${1} \
    && git checkout deploy  \
    && git merge master \
    && git push --all \
    && git checkout master

else
    echo "请输入要更新的版本号"
fi
