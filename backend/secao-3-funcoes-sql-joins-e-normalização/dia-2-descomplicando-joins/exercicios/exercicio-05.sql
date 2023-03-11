-- Exercício 5 Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética
USE pixar;
-- passo 1: Oque queremos exibir ?
-- theater id, theater name, theater location, movie title, movie director, movie year, movie length_minutes
SELECT
	t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
-- passo 2: De ONDE vamos consumir ?
FROM 
	theater AS t
-- passo 3: Quem e como vamos JUNTAR ?
RIGHT JOIN
	movies AS m ON m.theater_id = t.id
-- passo 4: regra de negocio.
ORDER BY t.name;