CREATE DATABASE crud

CREATE TABLE
    users (
        idUser INT AUTO_INCREMENT NOT NULL,
        Name VARCHAR(255) NOT NULL,
        Email VARCHAR(255) NOT NULL,
        Password VARCHAR(255) NOT NULL,
        Phone VARCHAR(255) NOT NULL,
        Country VARCHAR(255) NOT NULL,
        Image VARCHAR(255) NOT NULL,
        UNIQUE KEY unique_email (Email),
        PRIMARY KEY(idUser)
    );

