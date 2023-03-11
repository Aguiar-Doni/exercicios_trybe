-- Exercício 4 Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
USE pixar;
-- passo 1: Oque queremos exibir ?
-- name, location, title, director, year, length_minutes
SELECT 
	th.name,
    th.location,
    mov.title,
    mov.director,
    mov.year,
    mov.length_minutes
-- passo 2: De ONDE vamos pegar as infos base ?
FROM 
	theater AS th
-- passo 3: Quem queremos JUNTAR a nossa query ?
-- JUNTAR exempleTable APELIDO ex ONDE nome-apelido.foreign-key seja igual a apelido-do-banco-base.primary-key
JOIN
	movies AS mov ON mov.theater_id = th.id
-- passo 4: regra de negocio
-- ORDENA PRA MIM -> ORDER BY a nome-apelido.coluna-que-quero-ordenar
ORDER BY th.name;
	