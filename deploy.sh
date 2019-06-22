# /usr/bin/env bash

if [ $1 ]
then
    npm version ${1} \
    && git checkout deploy  \
    && git merge - \
    && git push --all \
    && git checkout -

else
    echo "请输入要更新的版本号"
fi
