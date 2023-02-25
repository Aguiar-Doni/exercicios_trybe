-- 6.Quase lá! Agora escreva uma query para exibir de supply, itens que custam mais de R$15,00 e menos de $40,00. 
-- Ordene os resultados por ordem crescente.
USE STORE;
SELECT COUNT(*) FROM sales
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';