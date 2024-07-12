#!/bin/bash

docker build -f Dockerfile.backend -t nextro-backend .
docker run -p 8080:8080 nextro-backend
