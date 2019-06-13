DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (100),
primary key (id)
);

INSERT INTO burgers(burger_name)
VALUES ("Bacon Burger");

INSERT INTO burgers(burger_name)
VALUES ("Cheeseburger");

INSERT INTO burgers(burger_name)
VALUES ("Hamburger");

SELECT * FROM burgers