-- Exercício 6: Exclua da tabela movies o filme “WALL-E”. P.S.: Lembrando que existe uma relação de Primary key-Foreign Key, portanto devemos excluir primeiro a referência da tabela box_office, para depois excluir da tabela movies.
USE pixar;

DELETE FROM box_office
WHERE movie_id = 11; -- tem que deletar primeiro aqui 

DELETE FROM movies 
WHERE title = 'WALL-E'; -- depois aqui