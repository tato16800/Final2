CREATE DATABASE db_example;

USE db_example;

CREATE TABLE datos(

    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    valor VARCHAR(50),
    codigo VARCHAR(50),
    caracteristica VARCHAR(50)
);

INSERT INTO datos(nombre,valor,codigo,caracteristica)
VALUES ('chocolate','5400','s5441','agrio');

SELECT * FROM datos;