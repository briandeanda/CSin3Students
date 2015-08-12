#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
    echo 'Hello Mac User ;)';
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo 'Hello Linux user :)';
fi
