CREATE DATABASE ds;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    guestname VARCHAR(64) NOT NULL,
    postname VARCHAR(64) NOT NULL,
    description VARCHAR(512) NOT NULL,
    youtubelink VARCHAR(64) NOT NULL,
    imglink VARCHAR(64) NOT NULL,
    imgdeletelink VARCHAR(64) NOT NULL,
    guestnameru VARCHAR(64) NOT NULL,
    postnameru VARCHAR(64) NOT NULL,
    descriptionru VARCHAR(512) NOT NULL
);

CREATE TABLE rofl(
    image base64 NOT NULL
);