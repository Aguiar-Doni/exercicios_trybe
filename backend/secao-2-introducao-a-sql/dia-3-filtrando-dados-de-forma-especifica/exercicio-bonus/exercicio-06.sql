-- 6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
USE Scientists;
SELECT * FROM Projects WHERE Hours > 250 AND Hours < 800;
-- também da pra usar o between;