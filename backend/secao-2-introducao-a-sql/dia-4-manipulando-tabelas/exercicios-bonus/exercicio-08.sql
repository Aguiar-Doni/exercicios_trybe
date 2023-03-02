-- Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

USE pixar;

UPDATE box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

SELECT * FROM box_office
WHERE rating = 9;