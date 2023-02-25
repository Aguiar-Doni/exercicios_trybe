-- 2. Escreve uma query para retornar da tebela 'supply' os dados em que a coluna 'item_id'
-- possua valor '2'. Organize o resultado por ordem alfabética de 'supplier_id'
USE store;
SELECT * FROM supplies
WHERE item_id = 2 
ORDER BY price;