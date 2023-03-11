-- Exercício 2 Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

USE pixar;
-- passo 1: definir oque vai ser exibido;
-- titulo, e vendas(esse resultado sera baseado em regra de negocio) também sera somado valor total de vendas
SELECT
	title 'Titulo', domestic_sales + international_sales 'Vendas'
-- passo 2: encontrar quem vai ser o database referência para as informações
FROM
	movies AS mov -- > dar um apelido, que vai ser usado para ajudar exibir as infos
-- passo 3: encontrar quais tabelas você precisa trazer e qual tipo de join ira fazer
JOIN
	box_office AS box ON box.movie_id = mov.id -- dar um apelido e verificar se a referencia realmente entra tabelas existe
-- passo 4: regras de negocios dica: 
-- PARA ABSTRAÇÃO TRADUZA OS NOMES DAS FUNÇÕES E COLOQUE EM UMA FRASE
-- EXIBA -> SELECT pra mim titulo e vendas DE -> FROM uma tabela que vai ser o APELIDO -> AS qualquer
-- JUNTA -> INNER JOIN ou só JOIN as infos de uma outra tabela que vai ser o APELIDO -> AS qualquer
-- ONDE -> ON o relacionamento entre tabelas exista (o ON é o WHERE do JOIN)
-- ONDE -> WHERE exista essa regra de negocio aqui; o WHERE é para aplicar regras de negocio;
WHERE
	box.international_sales > domestic_sales;