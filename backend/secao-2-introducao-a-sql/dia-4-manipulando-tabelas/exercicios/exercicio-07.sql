-- Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.

USE pixar;

SELECT id FROM movies
WHERE director = 'Andrew Stanton';
-- LENDO PRIMEIRO OQUE EU VOU PRECISAR EXCLUIR

DELETE FROM box_office
WHERE movie_id IN(2, 9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';

-- Verificando depois
SELECT id FROM movies
WHERE director = 'Andrew Stanton'; 