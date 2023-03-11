-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
USE pixar;
-- passo 1: Oque vamos exibir ?
SELECT 
	m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
-- passo 2: De ONDE vai vir essas infos?
FROM
	movies m
-- passo 3: quem vamos JUNTAR e como vamos juntar
JOIN
	box_office b ON b.movie_id = m.id
-- passo 4: regras de negocio
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;