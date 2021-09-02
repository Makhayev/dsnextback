CREATE DATABASE ds;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    guestname VARCHAR(512) NOT NULL,
    postname VARCHAR(512) NOT NULL,
    description VARCHAR(2048) NOT NULL,
    youtubelink VARCHAR(512) NOT NULL,
    imglink VARCHAR(512) NOT NULL,
    imgdeletelink VARCHAR(512) NOT NULL,
    guestnameru VARCHAR(512) NOT NULL,
    postnameru VARCHAR(512) NOT NULL,
    descriptionru VARCHAR(2048) NOT NULL
);

CREATE TABLE rofl(
    image base64 NOT NULL
);