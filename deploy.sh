# /usr/bin/env bash

if [ $1 ]
then
    npm version ${1} && git push
else
    echo "请输入要更新的版本号"
fi