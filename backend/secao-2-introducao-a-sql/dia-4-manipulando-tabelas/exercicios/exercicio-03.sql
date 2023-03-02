USE pixar;

SET SQL_SAFE_UPDATES = 0; -- Alterar a permissão para conseguir praticar o update ps: nao esquecer o WHERE

UPDATE movies 
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

SELECT * FROM movies
WHERE director = 'Andrew Stanton';

