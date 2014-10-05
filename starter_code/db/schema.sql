-- NOTES BELOW

-- To enter Postgres Terminal
psql

-- To quit psql
\q

-- To create database
CREATE DATABASE jungle;

-- To connect to a database
\c jungle;

CREATE TABLE categories(
  id serial primary key,
  name varchar(255)
);

CREATE TABLE contacts(
  id serial primary key,
  name varchar(255),
  age integer,
  address varchar(255),
  phone_number varchar(255),
  picture text,
  category_id integer
);

-- Return all entries on a table
SELECT * FROM monkeys;

-- Return entries based on a specified attribute
SELECT * FROM birds WHERE name = 'Lola';


