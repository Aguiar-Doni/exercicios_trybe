-- Exercício 3 Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
USE pixar;
-- passo 1: Definir oque será exibido
-- titulo e avaliação
SELECT 
	title, rating
-- passo 2: Qual é a tabela base de informações e de apelido(usar apelidos que façam sentido como o inicio do proprio nome da tabela ajudam a entender e dar sentido pro codigo)
-- movie 
FROM
	movies AS mov
-- passo 3: Qual a tabela qual queremos trazer informações e comparar de existe o relacionamento primary key = a foreign key
JOIN
	box_office AS box ON box.movie_id = mov.id
ORDER BY box.rating DESC;
	