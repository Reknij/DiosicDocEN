---
title: Docker
date: 2022-12-26 22:01:36
categories:
    - Installation
---
# Install from docker
## docker-compose
Using docker-compose.yml file with the following content:
```docker
version: "3.9"
services:
  diosic:
    image: jinker25/diosic:latest
    user: 1000:1000
    ports:
      - "3177:3177"
    restart: unless-stopped
    environment:
      LIB_NAME_1: "My library"
    volumes:
      - "/your/data/folder:/data"
      - "/your/library/folder:/library"
```
Start it with docker-compose up -d. Please ensure target data and library folder permission is same with you docker-compose.yml user.

## docker-cli
Using docker command line tool:
```bash
docker run -d \
    --name diosic \
    -v "/your/data/folder:/data" \
    -v "/your/library/folder:/library" \
    -p "3177:3177" \
    -e LIB_NAME_1=MyLibrary \
    jinker25/diosic:latest
```