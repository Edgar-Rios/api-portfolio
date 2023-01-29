-- CREACION DE LA BASE DE DATOS ----------
-- ---------------------------------------
-- drop database if exists my_portfoly;  
-- create database if not exists my_portfoly;
-- use my_portfoly;

-- ---------------------------------------
-- CREACION DE LAS TABLAS-----------------
-- ---------------------------------------

CREATE TABLE IF NOT EXISTS contact(
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    phone VARCHAR(15),
    linkedin VARCHAR(150),
    github VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS `owner` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    my_name VARCHAR(20) NOT NULL,
    intro text,
    contact_id INT,
    
    FOREIGN KEY (contact_id) REFERENCES `contact`(id) ON DELETE SET NULL
);


CREATE TABLE IF NOT EXISTS category (
	id INT PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(45)
);

CREATE TABLE IF NOT EXISTS thought(
	id INT PRIMARY KEY AUTO_INCREMENT,
    owner_id INT NOT NULL,
    title VARCHAR(75) NOT NULL,
    content TEXT NOT NULL,
    category_id INT NOT NULL,
    
    FOREIGN KEY (category_id) REFERENCES `category`(id),
    FOREIGN KEY (owner_id) REFERENCES `owner`(id)
);

CREATE TABLE IF NOT EXISTS proyect(
	id INT PRIMARY KEY AUTO_INCREMENT,
    owner_id INT NOT NULL,
    title VARCHAR(100) DEFAULT 'PROYECTO',
    link VARCHAR(200) NOT NULL,
    
	FOREIGN KEY (owner_id) REFERENCES `owner`(id)

);
-- ---------------------------------------
-- ---------------------------------------
-- create table if not exists ;
