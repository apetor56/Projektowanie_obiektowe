FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y vim git

RUN apt-get install -y fp-compiler

RUN useradd -m lukasz
RUN adduser lukasz sudo

RUN mkdir /home/lukasz/projektowanie_obiektowe
WORKDIR /home/lukasz/projektowanie_obiektowe
