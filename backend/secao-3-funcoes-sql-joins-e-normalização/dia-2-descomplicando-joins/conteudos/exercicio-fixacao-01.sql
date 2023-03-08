-- 1.Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.

USE sakila;
select * from film_actor; -- começo verificando as tabelas que serão usadas
select * from actor; 
SELECT 
	act.actor_id, act.first_name, f.film_id  -- defina tudo que for ser exibido
FROM 
	actor AS act -- de onde vem e coloque um apelido
INNER JOIN -- traga a tabela de referencia e compare se as chaves bate
	film_actor AS f ON act.actor_id = f.actor_id;