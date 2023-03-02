-- Exercício 2: Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela box_office.

USE pixar;
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
	VALUE(9, 6.8, 450000000, 370000000);
    
SELECT * FROM box_office;