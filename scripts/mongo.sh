#!/bin/bash

docker run -d --name mongodb -p 27017:27017 -v ~/workspace/lockbot/mongodb:/data/db  mongo
