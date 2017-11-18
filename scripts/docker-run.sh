#!/bin/bash

docker rm lockbot
docker run -d --name lockbot --link mongodb:mongo lockbot
