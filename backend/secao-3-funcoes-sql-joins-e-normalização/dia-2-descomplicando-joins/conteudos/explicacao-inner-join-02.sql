USE sakila;
SELECT f.title, f.language_id, .l.name AS `language`
FROM film AS f
INNER JOIN language AS l
ON f.language_id = l.language_id;