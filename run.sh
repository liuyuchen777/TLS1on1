#!/bin/bash

FRONTEND_DIR=frontend/
BACKEND_DIR=backend/

has () {
  which "$1" > /dev/null 2>&1
}

case "$1" in
    "" )
        npm --prefix $FRONTEND_DIR install $FRONTEND_DIR
        npm --prefix $FRONTEND_DIR run start
        cd $BACKEND_DIR
        docker compose up
        exit 0
        ;;
    "doctor" )
        HAS_ERROR=0
        if ! has docker; then
            HAS_ERROR=1
            echo '[run.sh] Docker IS NOT INSTALLED.'
            echo '[run.sh]     Please install Docker: https://www.docker.com/get-started'
        else
            if ! docker ps > /dev/null; then
                HAS_ERROR=1
                echo '[run.sh] Docker IS NOT RUNNING.'
            fi
        fi
        if [ ! -f ./backend/.env ]; then
            HAS_ERROR=1
            echo '[run.sh] backend/.env IS NOT FOUND.'
            echo '[run.sh]     Please exec command:'
            echo '[run.sh]         cp backend/.env.example backend/.env'
            echo '[run.sh]     ...and edit backend/.env'
        fi
        if ! has node; then
            HAS_ERROR=1
            echo '[run.sh] node IS NOT INSTALLED.'
            echo '[run.sh]     Please install node: https://nodejs.org/ja/download/releases/'
        fi

        if [ $HAS_ERROR -eq 1 ]; then
            echo '[run.sh] ----------'
            echo '[run.sh] doctor: NG'
            exit 1
        else
            echo '[run.sh] doctor: OK'
            exit 0
        fi
        ;;
esac
