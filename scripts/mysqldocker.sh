#!/bin/bash

docker run -p 3306:3306 --name lb-mysql -e MYSQL_ROOT_PASSWORD=devpass -d mysql
