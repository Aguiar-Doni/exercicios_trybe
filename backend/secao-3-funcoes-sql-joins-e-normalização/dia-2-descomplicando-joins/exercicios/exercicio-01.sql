-- Exercício 1 Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
USE pixar;
-- select definir tudo oque queremos exibir
-- title, domestic_sales, international_sales
SELECT mov.title 'titulo', box.domestic_sales 'vendas domesticas', box.international_sales 'vendas internacionais' -- > usar os apelidos para exibir as infos
-- de onde vira a base de informaçõEscola
-- aqui vira de filmes e faremos inner join para traser outra tabela 
-- a qual movies é referenciada nela](ou seja, é uma foreign key em outra tabela)
FROM movies AS mov -- é preciso dar uma apelido 
JOIN -- apelido para tabela que ira chegar pelo join também
	box_office box ON box.movie_id = mov.id;

