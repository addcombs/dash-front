CREATE TABLE user(
    userId text PRIMARY KEY,
    firstname text,
    lastname text,
    birthdate date,
    imageUrl text
)

CREATE TABLE bank(
    userId text PRIMARY KEY,
    balance float
)

SELECT * from user;

DESCRIBE combs;