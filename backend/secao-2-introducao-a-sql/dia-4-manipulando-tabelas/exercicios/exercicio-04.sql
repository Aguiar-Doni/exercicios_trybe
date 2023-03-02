USE pixar;

-- FAZ O UPDATE
UPDATE movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

-- CONFERE SE AS INFORMAÇOES ESTAO CERTAS
SELECT * FROM movies
WHERE title = 'Ratatouille';