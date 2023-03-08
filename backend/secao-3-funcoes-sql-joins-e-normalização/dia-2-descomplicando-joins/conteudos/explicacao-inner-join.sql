USE sakila;
SELECT 
 cit.country_id, coun.country, cit.city -- passo 1, escrever os campos que eu quero exibit
FROM city AS cit -- dizer de onde vem a tabela referencia e dar um apelido
INNER JOIN country AS coun -- trazer a tabela da qual eu quero juntar e dar um apelido
ON cit.country_id = coun.country_id; -- e comparar o relacionamento de uma com a outra