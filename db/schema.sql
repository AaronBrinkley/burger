CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER(90) NOT NULL AUTO_INCREMENT ,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP default NOW() ON UPDATE NOW(),
PRIMARY KEY(id)
);